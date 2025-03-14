"use client";

import React, { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PostFormInput, PostFormSchema } from "@/lib/validators/auth";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { AlertTriggerButton, useAlertToggle } from "@/components/alert-wrapper";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";
import {
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ImageUploader, { ImageType } from "@/components/imageUploader";
import dynamic from "next/dynamic";
import { PostType, createPost } from "@/lib/actions/blog-actions";
import BlogCategorySelect from "@/components/blog-category-select";
const TextEditor = dynamic(() => import("@/components/textEditor"), {
  ssr: false,
});

const NewPost = (props: { post?: PostType }) => {
  const { post } = props;
  const form = useForm<PostFormInput>({
    resolver: zodResolver(PostFormSchema),
    defaultValues: {
      id: post?.id,
      title: post?.title || "",
      description: post?.description || "",
      images: post?.images || [],
      category: post?.category.name || "",
    },
  });
  const [loading, setLoading] = React.useState(false);
  const dismissAlert = useAlertToggle();
  const [state, dispatch] = useActionState(createPost, undefined);

  async function handleSubmit(data: PostFormInput) {
    setLoading(true);

    return React.startTransition(() => {
      dispatch(data);
    });
  }
  form.watch((data) => {
    console.log(data);
  });
  useEffect(() => {
    if (state?.fieldError) {
      setLoading(false);
      Object.entries(state.fieldError).forEach(([key, value]) => {
        form.setError(key as any, {
          type: "manual",
          message: value,
        });
      });
    }
    if (state?.formError) {
      setLoading(false);
      toast.error(state.formError);
    }
    if (state?.data) {
      setLoading(false);
      toast.success(
        post?.id
          ? "Publication updated successfully"
          : "Publication created successfully"
      );
      form.reset();
      return post
        ? dismissAlert("edit", "true")
        : dismissAlert("postId", "new");
    }
  }, [state?.formError, state?.fieldError, state?.data]);
  return (
    <>
      <AlertDialogTitle></AlertDialogTitle>
      <div className="space-y-4">
        <h2 className="space-x-3">
          <span className="text-xl font-medium">
            {post?.id ? "Update Publication" : "Add New Publication"}
          </span>
        </h2>
      </div>
      <div className="my-4 px-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            encType="multipart/form-data"
          >
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem hidden>
                    <FormControl>
                      <Input type="text" placeholder="id" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Publication title</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Publication title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={() => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <BlogCategorySelect
                          name={form.getValues("category") ?? ""}
                          onValueChange={(name) => {
                            console.log(name);
                            form.setValue("category", name);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Publication images</FormLabel>
                    <FormControl>
                      <ImageUploader
                        bucketName="images"
                        folderName="blogs"
                        images={form.getValues("images") as ImageType[]}
                        saveImages={(image) => form.setValue("images", image)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Publication description</FormLabel>
                    <FormControl>
                      <TextEditor
                        placeholder="Publication description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AlertDialogTitle>
                {/* <AlertDialogContent></AlertDialogContent> */}
                <AlertDialogFooter className="w-full flex flex-row gap-3 mt-3 ">
                  <AlertTriggerButton
                    alertKey={post?.id ? "edit" : "postId"}
                    alertValue={post?.id ? "true" : "new"}
                    type="button"
                    className="px-8 py-2 flex-1"
                  >
                    Cancel
                  </AlertTriggerButton>
                  <Button
                    disabled={loading}
                    size={"lg"}
                    className=" flex-1"
                    type="submit"
                  >
                    {loading && (
                      <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {post?.id ? "Update" : "Save"}
                  </Button>
                </AlertDialogFooter>
              </AlertDialogTitle>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default NewPost;

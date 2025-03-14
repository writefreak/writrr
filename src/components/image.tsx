"use client";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import useImageHandler from "@/hooks/use-image-handler";
import Img, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "width" | "height"> & {
  bucketName: string;
  folderName: string;
  className?: string;
  src: string;
  alt: string;
  scale?: boolean;
  zoomIn?: boolean;
};

const Image = ({
  className,
  src,
  alt,
  bucketName,
  folderName,
  scale,
  zoomIn,
  ...props
}: Props) => {
  const { getImageUrl } = useImageHandler(bucketName, folderName);
  console.log(getImageUrl(src), src);
  return useMemo(
    () => (
      <div
        className={cn(
          "w-full overflow-hidden group relative h-full object-cover",
          className
        )}
      >
        <img
          {...props}
          src={getImageUrl(src)}
          // priority={true}
          alt={alt}
          // fill={true}
          className={cn(
            " object-cover w-full h-full rounded-md",
            scale && "group-hover:scale-110 transition-all duration-3000",
            zoomIn && "group-hover:scale-90 group-hover:object-scale-contain"
          )}
        />
      </div>
    ),
    [props]
  );
};

export default Image;

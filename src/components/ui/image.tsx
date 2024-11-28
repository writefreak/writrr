"use client";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
// import useImageHandler from "@/hooks/use-image-handler";
import Img, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "width" | "height"> & {
  bucketName?: string;
  className?: string;
  src: string;
  alt: string;
  scale?: boolean;
  zoomIn?: boolean;
  containerClassName?: string;
};

const Picture = ({
  className,
  src,
  alt,
  bucketName,
  scale,
  zoomIn,
  containerClassName,
  ...props
}: Props) => {
  //   const { getImageUrl } = useImageHandler(bucketName);
  const [isLoading, setLoading] = useState(true);
  return useMemo(
    () => (
      <div
        className={cn(
          "w-full overflow-hidden group transition duration-300 relative h-full object-cover",
          !src && "blur-sm",
          containerClassName
        )}
      >
        {src && (
          <Img
            {...props}
            // src={getImageUrl(src)}
            src={src}
            onLoad={() => setLoading(false)}
            alt={alt || "Background of a beautiful project"}
            fill={true}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            className={cn(
              " object-cover transition  duration-1000 w-full h-full",
              isLoading ? "blur-sm" : "blur-none",
              scale && "group-hover:scale-110 transition-all duration-3000",
              zoomIn && "group-hover:scale-90 group-hover:object-scale-contain",
              className
            )}
          />
        )}
      </div>
    ),
    [props]
  );
};

export default Picture;

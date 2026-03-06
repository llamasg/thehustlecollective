export default function ImagePlaceholder({
  aspectRatio = "4/3",
  label = "Image placeholder",
}: {
  aspectRatio?: string;
  label?: string;
}) {
  return (
    <div
      className="flex w-full items-center justify-center bg-black/5"
      style={{ aspectRatio }}
    >
      <div className="text-center">
        <span
          className="block text-black/10 text-[4rem] leading-none select-none"
          aria-hidden="true"
        >
          &#x2731;
        </span>
        <span className="text-[11px] tracking-wide uppercase text-black/20 mt-2 block">
          {label}
        </span>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function PreviewFrame({
  href,
  title,
  height = "h-[520px]",
}: {
  href: string;
  title: string;
  height?: string;
}) {
  const [iframeHeight, setIframeHeight] = useState(1200);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "preview-height" && event.data?.href === href) {
        setIframeHeight(event.data.height);
      }
    }

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, [href]);

  return (
    <div className={`${height} overflow-y-auto overflow-x-hidden rounded-[1.25rem] border border-[#E5E7EB] bg-white sm:rounded-[1.5rem]`}>
      <iframe
        src={href}
        title={title}
        scrolling="no"
        style={{ height: iframeHeight }}
        className="pointer-events-none w-full border-0"
      />
    </div>
  );
}

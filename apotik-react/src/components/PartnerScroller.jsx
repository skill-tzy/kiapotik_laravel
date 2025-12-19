import { useEffect, useRef } from "react";

export default function PartnerScroller() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper && wrapper.firstElementChild) {
      const clone = wrapper.firstElementChild.cloneNode(true);
      wrapper.appendChild(clone);
    }
  }, []);

  return (
    <div className="scrolling-wrapper" ref={wrapperRef}>
      <div className="logo-strip">
        <img src="/assets/tokopedia.png" />
        <img src="/assets/teman.png" />
        <img src="/assets/doctor.png" />
        <img src="/assets/tiktok.png" />
        <img src="/assets/dkonsul.png" />
        <img src="/assets/bca.png" />
        <img src="/assets/blibli.png" />
        <img src="/assets/lazada.png" />
        <img src="/assets/shopee.png" />
      </div>
    </div>
  );
}

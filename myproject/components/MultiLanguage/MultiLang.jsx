import { useEffect } from "react";

const Translate = () => {
  useEffect(() => {
    window.googleTranslateInit = () => {
      if (!window.google.translate.TranslateElement) {
        setTimeout(window.googleTranslateInit, 100);
      } else {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,pa,sa,ur,bn,es,ja,ko,zh-CN,es,fr,de,it,ta,te",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            defaultLanguage: "en",
          },
          "google_element"
        );
      }
    };

    const loadGoogleTranslateScript = () => {
      if (!document.getElementById("google_translate_script")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.id = "google_translate_script";
        script.onerror = () =>
          console.error("Error loading Google Translate script");
        document.body.appendChild(script);
      }
    };

    loadGoogleTranslateScript();

    if (window.google && window.google.translate) {
      window.googleTranslateInit();
    }
  }, []);

  return (
    <div
      id="google_element"
      className="flex items-center ml-8 bg-gray-100 py-4 px-2 rounded-lg shadow-lg"
    >
      
      <div
        className="hidden goog-te-gadget"
        style={{
          color: "transparent",
        }}
      ></div>

      <select
        className="bg-transparent text-black text-base border border-black p-1"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="pa">Punjabi</option>
        <option value="sa">Sanskrit</option>
        <option value="ur">Urdu</option>
        <option value="bn">Bengali</option>
        <option value="es">Spanish</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="zh-CN">Chinese</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
      </select>

      <style>
        {`
          .goog-logo-link,
          .goog-te-banner-frame,
          .VIpgJd-ZVi9od-l4eHX-hSRGPd,
          .VIpgJd-ZVi9od-aZ2wEe,
          .VIpgJd-ZVi9od-ORHb-OEVmcd {
            display: none !important;
          }

          .goog-te-gadget {
            color: transparent !important;
          }

          #goog-gt-tt, .goog-te-balloon-frame {
            display: none !important;
          }

          .goog-text-highlight {
            background: none !important;
            box-shadow: none !important;
          }
        `}
      </style>
    </div>
  );
};

export default Translate;

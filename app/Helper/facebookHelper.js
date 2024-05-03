// facebookPixel.js

// export const initFacebookPixel = (pixelId) => {
//   // window.fbq = window.fbq || function() {};
//   // if (!document.getElementById("facebook-jssdk")) {
//   //     var elem = document.createElement("script");
//   //     elem.src = "https://connect.facebook.net/en_US/fbevents.js";
//   //     elem.id = "facebook-jssdk";
//   //     document.getElementsByTagName("head")[0].appendChild(elem);
//   //     } else {
//   //         console.log('FB SDK already loaded');
//   //         }
//   //         window.fbAsyncInit = function() {
//   //             FB.init({
//   //                 appId      : pixelId,
//   //                 xfbml      : true,
//   //                 version    : 'v3.2'
//   //                 });
//   //                 fbTrackConversion();
//   //                 };

//   !(function (f, b, e, v, n, t, s) {
//     if (f.fbq) return;
//     n = f.fbq = function () {
//       n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
//     };
//     if (!f._fbq) f._fbq = n;
//     n.push = n;
//     n.loaded = !0;
//     n.version = "2.0";
//     n.queue = [];
//     t = b.createElement(e);
//     t.async = !0;
//     t.src = v;
//     s = b.getElementsByTagName(e)[0];
//     s.parentNode.insertBefore(t, s);
//   })(
//     window,
//     document,
//     "script",
//     "https://connect.facebook.net/en_US/fbevents.js"
//   );

//   fbq("init", pixelId);
//   fbq("track", "PageView");
// };

export const initFacebookPixel = (pixelId) => {
  if (typeof fbq === "undefined") {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    fbq("init", pixelId);
    fbq("track", "PageView");
    // fbq('track', '{{fBPixelType}}');
  } else {
    fbq("track", "ViewContent");
  }
};

const trackEvent = (eventName, eventData = {}) => {
  let data = Object.assign({}, defaultEventData, eventData);
  fbq("track", eventName, data);
};

// https://developers.facebook.com/docs/marketing-api/facebook-pixel-ads-for-websites/v2.8#conversions
export const trackPurchase = ({
  value = defaultEventData.value,
  currency = "USD",
  content,
}) => {
  // See: https://developers.facebook.com/docs/marketing-api/facebook-pixel-ads-for-websites/v2.8#purchases
  trackEvent("Purchase", {
    value: value,
    currency: currency,
    content_type: (content && content.item_id) || "product",
    content_ids: content && [content.item_id],
    content_category: content && content.item_group_id,
    num_items: content && content.quantity,
  });
};

// https://developers.facebook.com/docs/marketing-api/facebook-pixel-conversion-tracking for details
export const trackDonation = ({
  value,
  currency = "USD",
  donate_transaction = true,
}) => {
  if (!donate_transaction) return;
  trackEvent("Donation", {
    value: value,
    currency: currency,
  });
};

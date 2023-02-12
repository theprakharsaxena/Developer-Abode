import React, { useEffect } from "react";

const Chat: React.FC = () => {
  useEffect(() => {
    (function (d, w, c) {
      (w as any).SibConversationsID = "63e2c1819acd062e5a378a36";
      (w as any)[c] =
        (w as any)[c] ||
        function () {
          ((w as any)[c].q = (w as any)[c].q || []).push(arguments);
        };
      var s = d.createElement("script");
      s.async = true;
      s.src =
        "https://conversations-widget.sendinblue.com/sib-conversations.js";
      if (d.head) d.head.appendChild(s);
    })(document, window, "SibConversations");
  }, []);

  return <></>;
};

export default Chat;
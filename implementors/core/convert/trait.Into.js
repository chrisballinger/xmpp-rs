(function() {var implementors = {};
implementors["bytes"] = [];
implementors["libc"] = [];
implementors["mio"] = [];
implementors["openssl"] = [];
implementors["regex_syntax"] = [];
implementors["serde"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html\" title=\"struct collections::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt; for <a class=\"struct\" href=\"serde/bytes/struct.ByteBuf.html\" title=\"struct serde::bytes::ByteBuf\">ByteBuf</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"serde/bytes/struct.Bytes.html\" title=\"struct serde::bytes::Bytes\">Bytes</a>&lt;'a&gt;",];
implementors["string_cache"] = ["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"serde/bytes/struct.Bytes.html\" title=\"struct serde::bytes::Bytes\">Bytes</a>&lt;'a&gt;","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html\" title=\"struct collections::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt; for <a class=\"struct\" href=\"serde/bytes/bytebuf/struct.ByteBuf.html\" title=\"struct serde::bytes::bytebuf::ByteBuf\">ByteBuf</a>",];
implementors["syn"] = [];
implementors["tokio_core"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html\" title=\"struct collections::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt; for <a class=\"struct\" href=\"tokio_core/io/struct.EasyBuf.html\" title=\"struct tokio_core::io::EasyBuf\">EasyBuf</a>",];
implementors["void"] = [];
implementors["xmpp_proto"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/string/struct.String.html\" title=\"struct collections::string::String\">String</a>&gt; for <a class=\"enum\" href=\"xmpp_proto/events/enum.PresenceType.html\" title=\"enum xmpp_proto::events::PresenceType\">PresenceType</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/string/struct.String.html\" title=\"struct collections::string::String\">String</a>&gt; for <a class=\"enum\" href=\"xmpp_proto/events/enum.IqType.html\" title=\"enum xmpp_proto::events::IqType\">IqType</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
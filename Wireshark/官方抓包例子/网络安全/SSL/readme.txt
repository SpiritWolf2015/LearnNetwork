SSL with decryption keys
File: snakeoil2_070531.tgz 
Description: Example of SSL encrypted HTTPS traffic and the key to decrypt it. (example taken from the dev mailinglist)

Files: dump.pcapng, premaster.txt
Description: Capture and related keylog file of a openssl's s_client/s_server HTTP GET request over TLSv1.2 with 73 different cipher suites (generated using openssl-connect for Bug 9144 - Update TLS ciphers)

File: mysql-ssl.pcapng (11 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/mysql-ssl.pcapng?id=8cfd2f667e796e4c0e3bdbe117e515206346f74a, SSL keys in capture file comments)

File: mysql-ssl-larger.pcapng (show variables response in two TLS records and multiple TCP segments) (22 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/mysql-ssl-larger.pcapng?id=818f97811ee7d9b4c5b2d0d14f8044e88787bc01, SSL keys in capture file comments)

File: smtp-ssl.pcapng (8.8 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/smtp-ssl.pcapng?id=9615a132638741baa2cf839277128a32e4fc34f2, SSL keys in capture file comments)

File: smtp2525-ssl.pcapng (SMTP over non-standard port 2525) (8.8 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/smtp2525-ssl.pcapng?id=d448482c095363191ff5b5b312fa8f653e482425, SSL keys in capture file comments)

File: xmpp-ssl.pcapng (15 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/xmpp-ssl.pcapng?id=fa979120b060be708e3e752e559e5878524be133, SSL keys in capture file comments)

File: pop-ssl.pcapng (POP3) (9.2 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/pop-ssl.pcapng?id=860c55ba8449a877e21480017e16cfae902b69fb, SSL keys in capture file comments)

File: imap-ssl.pcapng (10 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/imap-ssl.pcapng?id=1123e936365c89d43e9f210872778d81223af36d, SSL keys in capture file comments)

File: pgsql-ssl.pcapng (7.7 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/pgsql-ssl.pcapng?id=836b6f746df24aa04fa29b71806d8d0e496c2a68, SSL keys in capture file comments)

File: ldap-ssl.pcapng (8.3 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/ldap-ssl.pcapng?id=d931120107e7429a689a8350d5e49c1f1147316f, SSL keys in capture file comments)

File: http2-16-ssl.pcapng (HTTP2 with ALPN h2-16 extension) (5.1 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/http2-16-ssl.pcapng?id=a24c03ce96e383faf2a624bfabd5cc843e78ab2a, SSL keys in capture file comments)

File: amqps.pcapng (AMQP using RabbitMQ server and Celery client) (5.1 KB, from https://git.lekensteyn.nl/peter/wireshark-notes/commit/tls/amqps.pcapng?id=3c00336b07f1fec0fb13af3c7d502d51fab732b7, SSL keys in capture file comments)

The *-ssl.pcapng capture files above can be found at https://git.lekensteyn.nl/peter/wireshark-notes/tree/tls/ with the pre-master key secrets being available in the capture file comments. See the commit log for further details. The keys have been extracted from the OpenSSL library using a LD_PRELOAD interposing library, libsslkeylog.so (sslkeylog.c).

For TLS 1.3 captures and keys, see Bug 12779. For example, Chromium 61 (TLS 1.3 draft -18) connecting to enabled.tls13.com using HTTP/2 can be found in this comment.
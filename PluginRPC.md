
---

# RPC Plugin #

---


## Description ##

The plug-in is designed as a replacement of the web server module mod\_scgi and performs functions of the last. I.e. carries out link between a web server and rTorrent. On one hand, it simplifies setup (and protection) of the chain ruTorrent->web-server->rTorrent (no need to care about any /RPC2). On another hand - implementation of this functional on php leads to additional (in comparison with "the native" module of a web server) server processor loading. Therefore usage of the given plug-in is not recommended for routers and various embedded systems.
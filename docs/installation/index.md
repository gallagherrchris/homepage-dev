---
title: Installation
description: Docs intro
icon: simple/docker
---

You have a few options for deploying homepage, depending on your needs. We offer docker images for a majority of platforms. You can also install and run homepage from source if Docker is not your thing. It can even be installed on Kubernetes with Helm.

!!! info

    Please note that when using features such as widgets, Homepage can access personal information (for example from your home automation system) and Homepage currently does not (and is not planned to) include any authentication layer itself. Thus, we recommend homepage be deployed behind a reverse proxy including authentication, SSL etc, and / or behind a VPN.

<br>

<div class="grid cards" style="margin: 0 auto;" markdown>
:simple-docker: [&nbsp; Install on Docker :octicons-arrow-right-24:](docker.md)
{ .card }

:simple-kubernetes: [&nbsp; Install on Kubernetes :octicons-arrow-right-24:](k8s.md)
{ .card }

:simple-unraid: [&nbsp; Install on UNRAID :octicons-arrow-right-24:](unraid.md)
{ .card }

:simple-nextdotjs: [&nbsp; Building from source :octicons-arrow-right-24:](source.md)
{ .card }

</div>

### `HOMEPAGE_ALLOWED_HOSTS`

As of v1.0 there is one required environment variable when deploying via a public URL, <code>HOMEPAGE_ALLOWED_HOSTS</code>. This is a comma separated (no spaces) list of allowed hosts (sometimes with the port) that can access your homepage. See the [docker](docker.md) and [source](source.md) installation pages for examples.

---
tags:
  - contribution
  - guidline
---
## Development
### Requirements
- [[Docker]]
- [MailDev](https://github.com/maildev/maildev)

For macOS users, you can install them:
```shell
# Download and run MailDev
> docker pull maildev/maildev
> docker run -d --name maildev -p 1080:1080 -p 1025:1025 maildev/maildev
```

### Start local site

```shell
# Startup
> just dev

# Create and run container
> just dev_container
```


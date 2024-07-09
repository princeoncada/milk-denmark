# :wave: Lets milk em dry :wave:

## Prerequisites

### Shopify CLI

```sh
pnpm install -g @shopify/cli@latest @shopify/theme
# @shopify/theme is OPTIONAL pero gipakita sa course needed man ata hahah
```

### [Ruby+Devkit Ver 3.2.4-1](URL "https://rubyinstaller.org/downloads/")

## How to use

To use this repository for making Shopify themes, use the following command of Shopify CLI.

```sh
shopify theme init [ NAME OF YOUR THEME ] --clone-url https://github.com/KuuShyn/spectacular-perspective-theme.git
```

or clone directly without using shopify

```sh
git clone https://github.com/KuuShyn/spectacular-perspective-theme.git

```

install packages with pnpm

```sh
pnpm install
```

run tailwindcss
```sh
pnpm watch:tailwind
```

Connect to the Store.
```sh
shopify theme dev --store [ NAME OF THE STORE ] 
```

it should display something like this

![Example Image](readme\image.png)
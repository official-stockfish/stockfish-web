# Stockfish Website

This is the repository for the Stockfish website, hosted at [stockfishchess.org](https://stockfishchess.org).

## Requirements
This project uses [Hugo Pipes](https://gohugo.io/hugo-pipes/) to compile SCSS and minify assets. Please make sure you have the **Hugo Extended** version installed. If you are not using the extended version this theme will not work.

To check your version of Hugo, run:

```
hugo version
```

This will output the currently installed version of Hugo. Make sure you see `/extended` after the version number, for example `ugo v0.140.2-aae02ca612a02e085c08366a9c9279f4abb39d94+extended linux/amd64 BuildDate=2024-12-30T15:01:53Z`. You do not need to use version v0.140.2 specifically, it just needs to have the `/extended` part.

## Development

Build the static site
```
hugo
```

Run the development server
```
hugo server
```

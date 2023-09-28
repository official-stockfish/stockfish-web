# Stockfish Website

This is the repository for the Stockfish website, hosted at [stockfishchess.org](https://stockfishchess.org).

## Requirements
This project uses [Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) to compile SCSS and minify assets. Please make sure you have the **Hugo Extended** version installed. If you are not using the extended version this theme will not work.

To check your version of Hugo, run:

```
hugo version
```

This will output the currently installed version of Hugo. Make sure you see `/extended` after the version number, for example `Hugo Static Site Generator v0.51/extended darwin/amd64 BuildDate: unknown` You do not need to use version v0.51 specifically, it just needs to have the `/extended` part.

## Development

Build the static site
```
hugo
```

Run the development server
```
hugo server
```

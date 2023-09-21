// @ts-check

import rgba from "color-rgba"

export function zSnoutTheme() {
  return {
    /** @type {import("tailwindcss/types/config").PluginCreator} */
    handler(api) {
      /** @type {import("tailwindcss/types/config").ThemeConfig["colors"]} */
      const colors = api.theme("colors")

      api.addComponents({
        ".z-arc": {
          "--z-bg-body": "var(--arc-palette-background)",
          "--z-bg-body-partial": "var(--arc-palette-background)",
          "--z-bg-body-selected": "var(--arc-palette-cutoutColor)",
          "--z-bg-field": "#000c",
          "--z-bg-field-selected": "var(--arc-palette-cutoutColor)",
          "--z-bg-theme-switcher": "var(--arc-palette-cutoutColor)",

          "--z-border": "var(--arc-palette-focus)",
          "--z-border-selected": "var(--z-border)",
          "--z-border-focus": "var(--z-border)",
          "--z-border-separator": "var(--arc-background-simple-color)",
          "--z-border-theme-switcher": "var(--z-border)",

          "--z-icon": "var(--arc-palette-foregroundSecondary)",
          "--icon-fill": "var(--z-icon)",

          "--z-ring-focus": "var(--arc-palette-hover)",

          "--z-text": "var(--arc-palette-foregroundPrimary)",
          "--z-text-dimmed": "var(--arc-palette-foregroundSecondary)",
          "--z-text-heading": "var(--arc-palette-title)",
          "--z-text-link": "var(--arc-palette-foregroundTertiary)",
          "--z-text-subtitle": "var(--arc-palette-foregroundSecondary)",

          "@supports (color: color-mix(in oklab, var(--arc-palette-cutoutColor), transparent))":
            {
              "--z-bg-body-partial":
                "color-mix(in oklab, var(--arc-palette-background), transparent)",
              "--z-bg-field":
                "color-mix(in oklab, var(--arc-palette-cutoutColor), transparent)",
            },
        },
      })

      if (typeof colors == "object" && colors) {
        const entries = Object.entries(colors)

        for (const [key, value] of entries) {
          if (
            typeof value == "object" &&
            value &&
            "50" in value &&
            "100" in value &&
            "200" in value &&
            "300" in value &&
            "400" in value &&
            "500" in value &&
            "600" in value &&
            "700" in value &&
            "800" in value &&
            "900" in value &&
            "950" in value
          ) {
            api.addComponents({
              [".z-light-" + key]: {
                "--z-bg-body": "#fff",
                "--z-bg-body-partial": "#ffffff80",
                "--z-bg-body-selected": value[200],
                "--z-bg-field": "#fff",
                "--z-bg-field-selected": value[200],
                "--z-bg-theme-switcher": value[50],

                "--z-border": value[300],
                "--z-border-selected": value[300],
                "--z-border-separator": value[300],
                "--z-border-theme-switcher": value[200],

                "--z-icon": value[500],
                "--icon-fill": "var(--z-icon)",

                "--z-text": value[600],
                "--z-text-dimmed": value[400],
                "--z-text-heading": value[800],
                "--z-text-subtitle": value[500],
              },

              [".z-light-focus-" + key]: {
                "--z-border-focus": value[500],
                "--z-ring-focus": value[200],
                "--z-text-link": value[600],
              },

              [".z-dark-" + key]: {
                "--z-bg-body": value[900],
                "--z-bg-body-partial": (() => {
                  const result = rgba(String(value[900] || "#000")) || [0, 0, 0]
                  return `rgb(${result[0]} ${result[1]} ${result[2]} / 0.5)`
                })(),
                "--z-bg-body-selected": value[800],
                "--z-bg-field": value[800],
                "--z-bg-field-selected": value[700],
                "--z-bg-theme-switcher": value[800],

                "--z-border": value[700],
                "--z-border-selected": value[600],
                "--z-border-separator": value[600],
                "--z-border-theme-switcher": value[800],

                "--z-icon": value[400],
                "--icon-fill": "var(--z-icon)",

                "--z-text": value[300],
                "--z-text-dimmed": value[500],
                "--z-text-heading": value[200],
                "--z-text-subtitle": value[400],
              },

              [".z-dark-focus-" + key]: {
                "--z-border-focus": value[500],
                "--z-ring-focus": value[900],
                "--z-text-link": value[500],
              },
            })
          }
        }
      }

      api.addComponents({
        ".z-field": {
          resize: "none",
          "border-radius": "0.5rem",
          "border-width": "1px",
          "border-color": "var(--z-border)",
          "background-color": "var(--z-bg-field)",
          padding: "0.5rem 0.75rem",
          color: "var(--z-text)",
          "--tw-shadow":
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          "--tw-shadow-colored":
            "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
          "box-shadow":
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
          "--tw-ring-color": "var(--z-ring-focus)",
          "transition-property":
            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
          "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
          "transition-duration": "150ms",

          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: "0",
          },
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: "0",
          },

          '&[type="number"]': {
            "-moz-appearance": "textfield",
          },

          "&:where(.bg-z-field-selected, .bg-z-bg-field-selected)": {
            "border-color": "var(--z-border-selected)",
          },

          "&[disabled]": {
            opacity: "0.3",
          },

          '&:where(input[type="range"])': {
            position: "relative",
            width: "100%",
            appearance: "none",
            "border-radius": "9999px",
            "background-color": "transparent",
            padding: "0",

            "&::before": {
              position: "absolute",
              left: "50%",
              top: "50%",
              "--tw-translate-x": "-50%",
              "--tw-translate-y": "-50%",
              transform:
                "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
              "white-space": "pre",
              "font-family":
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              "font-size": "0.75rem",
              "line-height": "1rem",
              "font-weight": "300",
              "text-transform": "lowercase",
              color: "var(--z-text)",
              "transition-property":
                "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
              "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
              "transition-duration": "150ms",
              "--tw-content": "var(--label)",
              content: "var(--tw-content)",
            },

            "&::-webkit-slider-runnable-track": {
              height: "1rem",
              width: "100%",
              cursor: "pointer",
              "border-radius": "9999px",
              "background-color": "var(--z-bg-body)",
              "transition-property":
                "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
              "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
              "transition-duration": "150ms",
            },

            "&::-moz-range-track": {
              height: "1rem",
              width: "100%",
              cursor: "pointer",
              "border-radius": "9999px",
              "background-color": "var(--z-bg-body)",
              "transition-property":
                "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
              "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
              "transition-duration": "150ms",
            },

            "&::-webkit-slider-thumb": {
              position: "relative",
              "z-index": "10",
              "margin-top": "-0.25rem",
              height: "1.5rem",
              width: "1.5rem",
              cursor: "pointer",
              appearance: "none",
              "border-radius": "9999px",
              "border-width": "1px",
              "border-style": "solid",
              "border-color": "var(--z-border)",
              "background-color": "var(--z-bg-body-partial)",
              "--tw-shadow":
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
              "--tw-shadow-colored":
                "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
              "box-shadow":
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
              "--tw-ring-color": "var(--z-ring-focus)",
              "transition-property":
                "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
              "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
              "transition-duration": "150ms",
            },

            "&::-moz-range-thumb": {
              position: "relative",
              "z-index": "10",
              "margin-top": "-0.25rem",
              height: "1.5rem",
              width: "1.5rem",
              cursor: "pointer",
              appearance: "none",
              "border-radius": "9999px",
              "border-width": "1px",
              "border-style": "solid",
              "border-color": "var(--z-border)",
              "background-color": "var(--z-bg-body-partial)",
              "--tw-shadow":
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
              "--tw-shadow-colored":
                "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
              "box-shadow":
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
              "--tw-ring-color": "var(--z-ring-focus)",
              "transition-property":
                "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
              "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
              "transition-duration": "150ms",
            },

            "&:focus-visible": {
              "&::-webkit-slider-thumb": {
                "border-color": "var(--z-border-focus)",
                "--tw-ring-offset-shadow":
                  "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                "--tw-ring-shadow":
                  "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                "box-shadow":
                  "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
              },
            },
          },

          "&:where(textarea)": {
            resize: "vertical",
          },

          "&:where(button:not([disabled])):active": {
            "--tw-translate-y": "1px",
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },

          "&:focus-visible": {
            "border-color": "var(--z-border-focus)",
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-offset-shadow":
              "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow":
              "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow":
              "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
          },

          "&:has(:focus-visible)": {
            "border-color": "var(--z-border-focus)",
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-offset-shadow":
              "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow":
              "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow":
              "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
          },

          "&::placeholder": {
            color: "var(--z-text-subtitle)",
            "transition-property":
              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
            "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transition-duration": "150ms",
          },

          "&[data-placeholder]::before": {
            position: "absolute",
            color: "var(--z-text-subtitle)",
            "transition-property":
              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
            "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transition-duration": "150ms",
            "--tw-content": "attr(data-placeholder)",
            content: "var(--tw-content)",
          },
        },

        ".z-placeholder": {
          visibility: "hidden",
          color: "transparent",
          "--tw-content": "'empty'",
          content: "var(--tw-content)",
        },
      })

      api.matchComponents({
        "transition-and"(value) {
          return {
            "transition-property":
              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, " +
              value,
            "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transition-duration": "150ms",
          }
        },
      })

      api.matchUtilities(
        {
          icon(value) {
            return { "--icon-fill": value }
          },
        },
        {
          values: {
            ...colors,
            ...api.theme("iconColor"),
          },
        },
      )
    },

    /** @type {Partial<import("tailwindcss/types/config").Config>} */
    config: {
      theme: {
        extend: {
          aspectRatio: {
            "open-graph": "40 / 21",
          },

          fontFamily: {
            hebrew: '"Frank Ruhl Libre", "Times New Roman", "Times", serif',
          },

          height: {
            z: "calc(2.5rem + 2px)",
          },

          width: {
            z: "calc(2.5rem + 2px)",
          },

          colors: {
            "z-bg-body": "var(--z-bg-body)",
            "z-bg-body-partial": "var(--z-bg-body-partial)",
            "z-bg-body-selected": "var(--z-bg-body-selected)",
            "z-bg-field": "var(--z-bg-field)",
            "z-bg-field-selected": "var(--z-bg-field-selected)",
            "z-bg-theme-switcher": "var(--z-bg-theme-switcher)",

            "z-border": "var(--z-border)",
            "z-border-selected": "var(--z-border-selected)",
            "z-border-focus": "var(--z-border-focus)",
            "z-border-separator": "var(--z-border-separator)",
            "z-border-theme-switcher": "var(--z-border-theme-switcher)",

            "z-icon": "var(--z-icon)",

            "z-ring-focus": "var(--z-ring-focus)",

            "z-text": "var(--z-text)",
            "z-text-dimmed": "var(--z-text-dimmed)",
            "z-text-heading": "var(--z-text-heading)",
            "z-text-link": "var(--z-text-link)",
            "z-text-subtitle": "var(--z-text-subtitle)",
          },

          backgroundColor: {
            "z-body": "var(--z-bg-body)",
            "z-body-partial": "var(--z-bg-body-partial)",
            "z-body-selected": "var(--z-bg-body-selected)",
            "z-field": "var(--z-bg-field)",
            "z-field-selected": "var(--z-bg-field-selected)",
            "z-theme-switcher": "var(--z-bg-theme-switcher)",
          },

          borderColor: {
            z: "var(--z-border)",
            "z-selected": "var(--z-border-selected)",
            "z-focus": "var(--z-border-focus)",
            "z-separator": "var(--z-border-separator)",
            "z-theme-switcher": "var(--z-border-theme-switcher)",
          },

          iconColor: {
            z: "var(--z-icon)",
          },

          outlineColor: {
            z: "var(--z-border)",
            "z-focus": "var(--z-border-focus)",
          },

          ringColor: {
            "z-focus": "var(--z-ring-focus)",
          },

          textColor: {
            z: "var(--z-text)",
            "z-dimmed": "var(--z-text-dimmed)",
            "z-heading": "var(--z-text-heading)",
            "z-link": "var(--z-text-link)",
            "z-subtitle": "var(--z-text-subtitle)",
          },
        },
      },
    },
  }
}

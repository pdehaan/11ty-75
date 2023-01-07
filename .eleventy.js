const { inspect } = require("node:util");

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("inspect", data => {
    return inspect(data, { sorted: true });
  });

  eleventyConfig.addFilter("date_format", function (date = new Date(), format="") {
    return eleventyConfig.DateTime
      .fromJSDate(date, { zone: "utc" })
      .toFormat(format);
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};

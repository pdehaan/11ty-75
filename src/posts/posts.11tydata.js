// const { DateTime } = require("luxon");

module.exports = {
  tags: ["posts"],
  eleventyComputed: {
    permalink(data) {
      if (data.permalink) {
        return data.permalink;
      }
      const fmt = this.date_format(data.page.date, "yyyy/MM-dd-");
      return `posts/${ fmt + data.page.fileSlug }/`;
      // return DateTime
      //   .fromJSDate(data.page.date, { zone: "utc" })
      //   .toFormat(`'posts'/yyyy/MM-dd-'${ data.page.fileSlug }'/`);
    }
  }
};

const blockFields = `
...on bandcamp_block {
  album_art
  album_url
  bandcamp_album_id
  cta_label
  cta_target_blank
  cta_url
  dark_mode
  link_color
  title
}
...on imageblock {
  title
  image
  caption
}
...on text_block {
  body
  background_color
  background_image
  border_color
  heading_color
  icon_image
  text_color
  variant
}
...on video_block {
  video_url
}`;

export default `{
  page {
    title
    background_color
    background_image
    block_links {
      block {
        ${blockFields}

        ...on layout_block {
          layout_type
          block_links_1 {
            block {
              ${blockFields}
            }
          }
          block_links_2 {
            block {
              ${blockFields}
            }
          }
          block_links_3 {
            block {
              ${blockFields}
            }
          }
        }
      }
    }
  }
}`;

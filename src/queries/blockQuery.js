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

...on form_block {
  background_color
  button_color
  button_text_color
  border_color
  form_type
  message
  title
  text_color
}

...on imageblock {
  title
  image
  caption
}

...on spotify_block {
  title
  widget_type
  spotify_artist_id
  spotify_track_id
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
    background_color
    background_image
    display_page_title
    text_color
    title
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

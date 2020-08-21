export default `{
  page {
    title
    background_color
    background_image
    block_links {
      block {
        ...on imageblock {
          title
          image
          caption
        }
        ... on video_block {
          video_url
        }
        ... on bandcamp_block {
          album_art
          album_url
          bandcamp_album_id
          cta_label
          cta_target_blank
          cta_url
          dark_mode
          link_color
          message
          message_icon
          title
        }

        ... on text_block {
          body
          background_color
          background_image
          heading_color
          layout
          text_color
        }
      }
    }
  }
}`;
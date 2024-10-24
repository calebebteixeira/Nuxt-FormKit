export default defineEventHandler(() => {
  return {
    "code": "io_input_background_image",
    "template_input_code": "input_background_image",
    "name": "Background Image",
    "description": "Select from a collection of images in Group Select",
    "field_type": "group_select",
    "status": "active",
    "input_types": [
      "it_cover_page_background"
    ],
    "properties": [
      {
        "label": "Set Image",
        "vue3_component": "SelectImageGallery",
        "object_fit": "object-cover object-center",
        "container_size": "aspect-[2/3]",
        "include_selected_properties_in_data": "true",
        "fetch_limit": 6
      }
    ],
    "value_array": [],
    "group_select": {
      "name": "Select Background",
      "code": "gs_volvo-grp-mdg-1701-bkg-img-001",
      "group_code": "volvo-grp-mdg-1701-bkg-img-001",
      "description": null,
      "status": "active",
      "group_select_type": "select_item",
      "content_type": "CONTENT",
      "field_type": "drop_list",
      "group_by_category": null,
      "select_all": false,
      "value_array": [
        {
          "class": "Content",
          "code": "volvo-content-volvo-mdg-1701-bkg-img-001"
        }
      ],
      "limit_min": 1,
      "limit_max": 1,
      "allow_override": false,
      "override_fields": [],
      "properties": [
      ]
    }
  }
})

# action-uuid4

![GitHub License](https://img.shields.io/github/license/cdqag/action-uuid4)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/cdqag/action-uuid4/release.yaml?branch=master)
![GitHub Release](https://img.shields.io/github/v/release/cdqag/action-uuid4)
![GitHub file size in bytes](https://img.shields.io/github/size/cdqag/action-uuid4/dist%2Fmain.js?branch=v1)

This is very simple GitHub Action that generates UUID v4.

```yaml
steps:
  - name: Generate UUID v4
    id: generate-uuid
    uses: cdqag/action-uuid4@v1

  - name: Check output
    run: |
      echo "Generated UUID: ${steps.generate-uuid.outputs.uuid}"

```

## Outputs

* `uuid`

    Generated UUID v4

## About Creator

![CDQ Logo](https://www.cdq.com/themes/custom/gavias_nonid/logo.svg)

This action has been created and is maitained by [CDQ - Data Quality Solutions &amp; Services for Master Data](https://www.cdq.com/).

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.

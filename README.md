## SETUP

```console
sam package --template-file template.yml --output-template-file package.yml --s3-bucket sampocflutter
```


```console
sam deploy --template-file package.yml --stack-name sam-flutter-demo --capabilities CAPABILITY_IAM
```
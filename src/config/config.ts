export const config = {
  "dev": {
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
  },
  "prod": {
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
  }
}
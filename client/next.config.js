/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'icons8.com'
            },
            {
                protocol:'http',
                hostname:'www.w3.org'
            },
            {
                protocol:'https',
                hostname:'flowbite.s3.amazonaws.com'
            }
        ],
    },
}

module.exports = nextConfig

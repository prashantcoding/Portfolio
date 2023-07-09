import sanityClient from '@sanity/client';

export default sanityClient({
    projectId:"esuu6zjm",
    dataset:"production",
    apiVersion: '2021-10-21',
    useCdn: true
})
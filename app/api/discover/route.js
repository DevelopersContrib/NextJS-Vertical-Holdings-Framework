import {  getchatdomains } from '@/lib/data';

export const POST = async (request) => {
    const sort = await request.json();
    //console.log(data);
    const popular_domains = await getchatdomains('12','','name');
    return new Response(JSON.stringify({status:true, popular_domains:popular_domains,ret:sort}), { status: 201 })
}
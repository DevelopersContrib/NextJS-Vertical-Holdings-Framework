import {  getchatdomains } from '@/lib/data';

export const POST = async (request) => {
    const data = await request.json();
    
    const popular_domains = await getchatdomains(data.limit,data.keyword,data.sort);
    return new Response(JSON.stringify({status:true, popular_domains:popular_domains}), { status: 201 })
}
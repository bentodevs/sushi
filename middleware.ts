import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/invite')) {
        return NextResponse.redirect('https://discord.com/oauth2/authorize?client_id=686647951694758033&scope=bot&permissions=1393583122678');
    }

    if (request.nextUrl.pathname.startsWith('/support')) {
        return NextResponse.redirect('https://discord.gg/DwxCdXp276');
    }

    if (request.nextUrl.pathname.startsWith('/github')) {
        return NextResponse.redirect('https://github.com/bentodevs');
    }

    if (request.nextUrl.pathname.startsWith('/docs')) {
        return NextResponse.redirect('https://docs.bento-bot.com');
    }
}
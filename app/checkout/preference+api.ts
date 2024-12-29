import { MercadoPagoConfig, Preference } from 'mercadopago';

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
const client = new MercadoPagoConfig({ accessToken: String(process.env.EXPO_PUBLIC_MP_ACCESS_TOKEN) });

export async function POST(request: Request) {
    const item = await request.json();

    const preference = new Preference(client);

    preference.create({
        body: {
            items: [
                item
            ],
            back_urls: {
                "success": "myapp://checkout/congrats",
                "failure": "myapp://checkout/failure",
                "pending": "myapp://checkout/pending"
            },
            auto_return: "approved",
        }
    })
        .then((res) => {
            console.log('response', res)
            return Response.json(res.init_point);
        })
        .catch((err) => (console.log('error', err)));

    return Response.json(item);
}
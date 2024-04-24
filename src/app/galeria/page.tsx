'use client'

import { Template, ImageCard } from '@/components'
import { useState } from 'react'

export default function GaleriaPage() {
    const image1 = 'https://st2.depositphotos.com/3745557/7435/i/450/depositphotos_74355965-stock-photo-beautiful-oak-at-the-sunset.jpg';
    const image2 = 'https://images.unsplash.com/photo-1618588507085-c79565432917?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww';
    const nome1 = 'Arvore'
    const nome2 = 'Montanha'

    const [codigoImage, setCodigoImage] = useState<number>(2);
    const [urlImage, setUrlImage] = useState<string>(image1);
    const [nomeImage, setNomeImage] = useState<string>(nome2); 

    function mudarImagem() {
        if (codigoImage === 1) {
            setCodigoImage(2);
            setUrlImage(image2);
            setNomeImage(nome2)
        } else {
            setCodigoImage(1);
            setUrlImage(image1);
            setNomeImage(nome1)

        }
    }

    return (
        <Template>
            <button className="bg-gray-500"onClick={mudarImagem}>Clique para mudar</button>
            <section className='grid grid-cols-4 gap-8'>

                <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='23/04/2024' src={urlImage} />
                <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='23/04/2024' src={urlImage} />
                <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='23/04/2024' src={urlImage} />
            </section>
        </Template>
    )
}

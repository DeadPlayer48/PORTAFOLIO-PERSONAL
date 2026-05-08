const portfolioData = {
    // Los proyectos se listan aquí. El ID debe ser único y sin espacios.
    projects: [
        {
            id: 'neon-lavender',
            title: 'Project Neon Lavender',
            category: 'illustration',
            categoryLabel: 'Illustration / UI',
            coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAwUkzu5YQGr6TYIVEtxfm__EKwu0HENv3MfqAWRZMhl8ra77KLTxnFLjl6rfAh6MekDs3YH6t4EsJWjA7LorDbWgWcbrCfRbYmWL5mGfEEyk865xjCRgrcb2uRvGtsm_uPCkzlHAVJk5OeFoH4g3Er_djTI2UP-o9hZKnHSvI4KgmV0WVjCcfFNUIhwrA4Yj5ieFv5_fup46go2v0Y2I_w8a1QO6Cc73x98BOOyglhROT1GYMXLMC2onKTJwRTSu6LTc1Npwcx3E',
            heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAwUkzu5YQGr6TYIVEtxfm__EKwu0HENv3MfqAWRZMhl8ra77KLTxnFLjl6rfAh6MekDs3YH6t4EsJWjA7LorDbWgWcbrCfRbYmWL5mGfEEyk865xjCRgrcb2uRvGtsm_uPCkzlHAVJk5OeFoH4g3Er_djTI2UP-o9hZKnHSvI4KgmV0WVjCcfFNUIhwrA4Yj5ieFv5_fup46go2v0Y2I_w8a1QO6Cc73x98BOOyglhROT1GYMXLMC2onKTJwRTSu6LTc1Npwcx3E',
            cardSpan: 'md:col-span-8',
            role: 'Character Designer',
            tools: 'Photoshop, Illustrator',
            year: '2024',
            shortDescription: 'Character design and world-building through flat colors.',
            content: `
                <h2 class="font-h2 text-h2 text-on-background">World-building</h2>
                <p class="font-body-lg text-on-surface-variant">
                    El proyecto Neon Lavender nació de la idea de explorar el diseño de personajes a través del uso estricto de colores planos y estilo "cel-shaded". La meta era construir un universo visual coherente centrado en tonos pastel y violetas, contrastados con bordes fuertes.
                </p>
            `,
            showOnMain: true
        },
        {
            id: 'lofi-den',
            title: 'Lo-fi Den',
            category: '3d-modeling',
            categoryLabel: '3D Render',
            coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDslTu4gb86x-ERROHkUcsoB0WxjGPWroV3mFIq68TOG_UwGyfXAFLeYwE2Xbkxy3kBEn-NjiB3mOv9s4HfzcBR9VBEdYKXfI6opgS1R3Mxn0EuZbzRl3S42Q4VvhhNVOaMXI-AYOpl4mET5cdD7H86zsUmTtGYBPZuV5guF0EItWewYVwREdDkWTKrAnWl-WMjo6rRjvJ9OUrr18QOTnvs2vhUW28SrZBrAE1bgd0ghIdO-Z8xxU9HpgNQTtk3lhe32oEWxSJesE0',
            heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDslTu4gb86x-ERROHkUcsoB0WxjGPWroV3mFIq68TOG_UwGyfXAFLeYwE2Xbkxy3kBEn-NjiB3mOv9s4HfzcBR9VBEdYKXfI6opgS1R3Mxn0EuZbzRl3S42Q4VvhhNVOaMXI-AYOpl4mET5cdD7H86zsUmTtGYBPZuV5guF0EItWewYVwREdDkWTKrAnWl-WMjo6rRjvJ9OUrr18QOTnvs2vhUW28SrZBrAE1bgd0ghIdO-Z8xxU9HpgNQTtk3lhe32oEWxSJesE0',
            cardSpan: 'md:col-span-4',
            role: '3D Artist',
            tools: 'Blender',
            year: '2023',
            shortDescription: 'Low-poly 3D modeling for environments.',
            content: `
                <h2 class="font-h2 text-h2 text-on-background">Entornos Relajantes</h2>
                <p class="font-body-lg text-on-surface-variant">
                    Una exploración de modelado 3D isométrico con texturas planas. Lo-fi Den se concibió como un entorno de relajación digital, donde la iluminación suave y la paleta de lavanda y azul pastel invitan al espectador a sumergirse en una atmósfera "chill".
                </p>
            `,
            showOnMain: true
        },
        {
            id: 'visual-systems',
            title: 'Visual Systems',
            category: 'graphic-design',
            categoryLabel: 'Graphic Design',
            coverImage: 'brand_id_placeholder', // Identificador especial para renderizar texto en vez de imagen
            heroImage: 'brand_id_placeholder',
            cardSpan: 'md:col-span-4',
            role: 'Brand Designer',
            tools: 'Illustrator, Figma',
            year: '2023',
            shortDescription: 'Clean typography-led branding identities.',
            content: `
                <h2 class="font-h2 text-h2 text-on-background">Identidad de Marca</h2>
                <p class="font-body-lg text-on-surface-variant">
                    El diseño de un sistema visual coherente requiere atención al detalle. Este proyecto se enfocó en crear pautas de marca sólidas y logotipos basados en tipografía limpia, garantizando la escalabilidad en medios impresos y digitales sin perder el tono de voz de la marca.
                </p>
            `,
            showOnMain: true
        },
        {
            id: 'motion-graphics',
            title: 'Motion Graphics Reel',
            category: 'animation',
            categoryLabel: 'Animation',
            coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATEXpwm5wigSGWkvHIhYl0Sf4ubLQ8DjSG2-zTGQTWH15GIKraDTTSUXrntETy-DYz7GBEW9SQL37eZznOB596jW9_AVcp7zSQUtUN9teNho56AjCH-qGlrZFuQRBdt1jxk6rSqg5cbSxIqa5djI2aT2HKVf_07b0HF7uK27XcnAY5Ozw8Lc7dmR5n9hPmYZsONkV2usTsy6sYqtwuMdw2PD9MbLM5vajvU9n9fuhKocuEDIiMOzCd9Gd8jf3PucVywrrA5EfSl4g',
            heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATEXpwm5wigSGWkvHIhYl0Sf4ubLQ8DjSG2-zTGQTWH15GIKraDTTSUXrntETy-DYz7GBEW9SQL37eZznOB596jW9_AVcp7zSQUtUN9teNho56AjCH-qGlrZFuQRBdt1jxk6rSqg5cbSxIqa5djI2aT2HKVf_07b0HF7uK27XcnAY5Ozw8Lc7dmR5n9hPmYZsONkV2usTsy6sYqtwuMdw2PD9MbLM5vajvU9n9fuhKocuEDIiMOzCd9Gd8jf3PucVywrrA5EfSl4g',
            cardSpan: 'md:col-span-8',
            role: 'Animator',
            tools: 'After Effects',
            year: '2024',
            shortDescription: 'Keyframe-driven storytelling for modern brands.',
            content: `
                <h2 class="font-h2 text-h2 text-on-background">Animación y Dinamismo</h2>
                <p class="font-body-lg text-on-surface-variant">
                    Una recopilación de secuencias animadas que exploran el movimiento fluido y el impacto visual. Usando técnicas de animación 2D y keyframes, los vectores cobran vida para contar historias rápidas e impactantes, ideales para el entorno digital moderno.
                </p>
            `,
            showOnMain: true
        }
    ]
};

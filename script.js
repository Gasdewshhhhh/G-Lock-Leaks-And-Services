document.addEventListener('DOMContentLoaded', () => {
    const leaksContainer = document.querySelector('.leaks-container');
    
    const leaks = [
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466369/1355195568040837150/Untitled_4.png?ex=68031279&is=6801c0f9&hm=3c2609816d31814ad870840fc04d4f770e2ae90b0d6900c24640945c2d5dad1a&',
            title: 'RP Testing Roblox Hood',
            link: 'https://link-center.net/1237439/rp-testing-roblox-hood'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466369/1355195526835863694/Untitled_3.png?ex=6803126f&is=6801c0ef&hm=af322380b24f68b495fdff6489430a584a28ef10d1ab1329e47f949dedd385a1&',
            title: 'Santos World Roblox',
            link: 'https://direct-link.net/1237439/santos-world-roblox'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466369/1355195477586481283/11.png?ex=68031264&is=6801c0e4&hm=4e5396f0c314b83ca40e4ccab43c465a1e8d6e2608fd7aedd4e1d42cb05e61b2&',
            title: 'Trap N Bang Fully',
            link: 'https://link-center.net/1237439/trap-n-bang-fully'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466369/1355195709984346112/maxresdefault.webp?ex=6803129b&is=6801c11b&hm=c5fcdb6143b588a7977622aa3311252b197258c1686672431f99578b76d100a7&',
            title: 'Hoop Hills Roblox',
            link: 'https://direct-link.net/1237439/hoop-hills-roblox'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466370/1355196128894648480/Untitled_1.png?ex=680312ff&is=6801c17f&hm=7f6e29f64da958a621c3f1a1673a8c90616f81fb0ae5ddf14d9ee7b022a96342&',
            title: 'Roblox Basketball System',
            link: 'https://link-center.net/1237439/roblox-basketball-system'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466371/1360541810069344416/Untitled-1-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.png?ex=6802bf0d&is=68016d8d&hm=8f7b30424d1627f081566c8bd9a23654744e2aefe6efd82e57f28596c22a6f0b&',
            title: 'CG Scenes Roblox CC',
            link: 'https://link-center.net/1237439/cg-scenes-roblox-cc'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466371/1355200020248395847/Capture.png?ex=6803169f&is=6801c51f&hm=18a901c0e6edbb933208829f6369f27b41a7a7f1ddfd83fd3b0e44f8daed04b9&',
            title: 'FiveM Rig Character CC',
            link: 'https://link-hub.net/1237439/fivem-rig-character-cc'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466371/1355199861934526474/Untitled-2.png?ex=68031679&is=6801c4f9&hm=0cdad6135757c831c6e6ba97954f86acc701baeb453e25ecd0f7c604e2ecd418&',
            title: 'Free Roblox ATM Banking',
            link: 'https://link-hub.net/1237439/free-roblox-atm-banking'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466371/1355200085532741703/q3AJ21W.png?ex=680316ae&is=6801c52e&hm=d8f54d51f73adf0b73ab37ae99648f3cefeaa869e62ebba2e1e2301533384d08&',
            title: 'New FiveM Rig',
            link: 'https://link-hub.net/1237439/new-fivem-rigggg'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466372/1355200424277446788/Untitled.png?ex=680316ff&is=6801c57f&hm=f7a8cf6aeccd9f198e8616389cd904601ba6df0d05902457b8d0113e9c9a0cfa&',
            title: 'Auto Spoofer V1',
            link: 'https://mboost.me/eqo'
        }
    ];

    // Create leak panels
    leaks.forEach((leak, index) => {
        const panel = document.createElement('div');
        panel.className = 'leak-panel';
        panel.style.animationDelay = `${index * 0.1}s`;
        
        const img = document.createElement('img');
        img.src = leak.src;
        img.alt = `${leak.title} Screenshot`;
        
        const title = document.createElement('h3');
        title.className = 'leak-title';
        title.textContent = leak.title;
        
        const button = document.createElement('a');
        button.href = leak.link;
        button.className = 'download-button';
        button.textContent = 'Download';
        button.target = '_blank'; // Open in new tab
        
        panel.appendChild(img);
        panel.appendChild(title);
        panel.appendChild(button);
        leaksContainer.appendChild(panel);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
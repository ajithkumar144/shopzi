
const getCheckParams = (glob) => {
    return Object.entries(glob).map(([path, module]) => {
        return module.default;
    });
};

const mobileImages = getCheckParams(import.meta.glob('../assets/mobiles/*.{png,jpg,jpeg}', { eager: true }));
const dressImages = getCheckParams(import.meta.glob('../assets/dress/*.{png,jpg,jpeg}', { eager: true }));
const bagImages = getCheckParams(import.meta.glob('../assets/bags/*.{png,jpg,jpeg}', { eager: true }));
const beautyImages = getCheckParams(import.meta.glob('../assets/beauty-products/*.{png,jpg,jpeg}', { eager: true }));
const homeImages = getCheckParams(import.meta.glob('../assets/home-appliances/*.{png,jpg,jpeg}', { eager: true }));

const generateProducts = (images, category) => {
    return images.map((img, index) => {
        let priceRange;
        switch (category) {
            case 'mobiles': priceRange = { min: 10000, max: 80000 }; break;
            case 'dress': priceRange = { min: 500, max: 5000 }; break;
            case 'bags': priceRange = { min: 500, max: 4000 }; break;
            case 'beauty products': priceRange = { min: 300, max: 3000 }; break;
            case 'home appliances': priceRange = { min: 1000, max: 20000 }; break;
            default: priceRange = { min: 500, max: 5000 };
        }

        const price = Math.floor(Math.random() * (priceRange.max - priceRange.min + 1)) + priceRange.min;

        return {
            id: `${category}-${index}`,
            name: `${category.charAt(0).toUpperCase() + category.slice(1)} ${index + 1}`,
            image: img,
            category: category,
            price: price,
            description: `High quality ${category} product.`
        };
    });
};

export const products = [
    ...generateProducts(mobileImages, 'mobiles'),
    ...generateProducts(dressImages, 'dress'),
    ...generateProducts(bagImages, 'bags'),
    ...generateProducts(beautyImages, 'beauty products'),
    ...generateProducts(homeImages, 'home appliances'),
];

export const bannerImages = getCheckParams(import.meta.glob('../assets/carousel -banner-slider/*.{png,jpg,jpeg}', { eager: true }));


export const banners = [
    { image: bannerImages.find(src => src.includes('mobiles')), category: 'mobiles' }, // Heuristic match
    { image: bannerImages.find(src => src.includes('dress')), category: 'dress' },
    { image: bannerImages.find(src => src.includes('bags')), category: 'bags' },
    { image: bannerImages.find(src => src.includes('beauty')), category: 'beauty products' },
    { image: bannerImages.find(src => src.includes('home')), category: 'home appliances' }
].filter(b => b.image); // Filter out undefined if match fails

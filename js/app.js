/**
 * COREX - Premium Activewear E-Commerce SPA Engine
 */

// ==========================================
// 1. PRODUCT DATABASE (EXACTLY ALIGNED WITH demo.png SPECIFICATIONS)
// ==========================================
const PRODUCTS = [
  // ==========================================
  // 1. WOMEN TAB PRODUCTS (ID 1-10)
  // ==========================================
  {
    id: 1,
    name: "CoreX Essential Sports Bra",
    category: "Yoga",
    subCategory: "Sports Bra",
    gender: "women",
    price: 32,
    oldPrice: null,
    rating: 4.8,
    reviews: 128,
    colors: [
      { name: "Mauve", value: "#B89EA6" },
      { name: "Black", value: "#222222" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "78% Nylon, 22% Spandex",
    image: "bra",
    imageUrl: "images/generated/women-corex-essential-sports-bra.png",
    imageQuality: "catalog",
    imageType: "women-yoga",
    alt: "Premium sports bra with medium support straps.",
    galleryImages: ["images/generated/women-corex-essential-sports-bra.png"],
    description: "Medium support sports bra designed for yoga, pilates and everyday movement. Soft, breathable and sweat-wicking.",
    features: ["Medium Support", "Sweat Wicking", "4-Way Stretch", "Removable Pads"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "CoreX Flow Leggings",
    category: "Yoga",
    subCategory: "Leggings",
    gender: "women",
    price: 45,
    oldPrice: null,
    rating: 4.9,
    reviews: 96,
    colors: [
      { name: "Mauve", value: "#B89EA6" },
      { name: "Black", value: "#222222" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "80% Recycled Polyester, 20% Elastane",
    image: "leggings",
    imageUrl: "images/generated/women-corex-flow-leggings.png",
    imageQuality: "catalog",
    imageType: "women-bottom",
    alt: "Model standing wearing premium high-waisted ribbed leggings.",
    galleryImages: ["images/generated/women-corex-flow-leggings.png"],
    description: "Our buttery-soft leggings feature a high-rise waist and minimal seams to keep you focused on your flow.",
    features: ["High Waisted", "4-Way Stretch", "Breathable", "Eco Friendly"],
    isBestSeller: true,
    badge: "Best Seller"
  },

  {
    id: 4,
    name: "CoreX Seamless Leggings",
    category: "Yoga",
    subCategory: "Leggings",
    gender: "women",
    price: 46,
    oldPrice: null,
    rating: 4.8,
    reviews: 66,
    colors: [
      { name: "Dark Grey", value: "#5D6A75" },
      { name: "Black", value: "#222222" }
    ],
    sizes: ["S", "M", "L"],
    material: "90% Nylon, 10% Elastane",
    image: "rib-leggings",
    imageUrl: "images/women_4.png",
    imageQuality: "catalog",
    imageType: "women-bottom",
    alt: "Model standing in ribbed activewear leggings.",
    galleryImages: ["images/women_4.png"],
    description: "Experience zero distractions with our seamless ribbed leggings, providing contoured support and targeted compression.",
    features: ["Seamless Design", "Sweat Wicking", "High Support", "4-Way Stretch"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 5,
    name: "CoreX Open Back Bra",
    category: "Yoga",
    subCategory: "Sports Bra",
    gender: "women",
    price: 46,
    oldPrice: null,
    rating: 4.6,
    reviews: 40,
    colors: [
      { name: "Black", value: "#222222" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "78% Nylon, 22% Spandex",
    image: "bra",
    imageUrl: "images/women_5.png",
    imageQuality: "catalog",
    imageType: "women-yoga",
    alt: "Premium open back sports bra.",
    galleryImages: ["images/women_5.png"],
    description: "Stylish open back sports bra designed for hot yoga sessions and everyday athletic wear.",
    features: ["Open Back", "Medium Support", "Removable Pads", "Sweat Wicking"],
    badge: null
  },
  {
    id: 6,
    name: "CoreX Crop Top",
    category: "Yoga",
    subCategory: "Tops",
    gender: "women",
    price: 32,
    oldPrice: null,
    rating: 4.7,
    reviews: 58,
    colors: [
      { name: "Black", value: "#222222" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "92% Modal, 8% Spandex",
    image: "tank",
    imageUrl: "images/women_6.png",
    imageQuality: "catalog",
    imageType: "women-top",
    alt: "Activewear crop top.",
    galleryImages: ["images/women_6.png"],
    description: "Form-fitting crop top with minimal seams and sweat-wicking knit to keep you feeling cool.",
    features: ["Cropped Fit", "Sweat Wicking", "High Stretch"],
    badge: null
  },
  {
    id: 7,
    name: "CoreX High Waist Leggings",
    category: "Yoga",
    subCategory: "Leggings",
    gender: "women",
    price: 44,
    oldPrice: null,
    rating: 4.8,
    reviews: 82,
    colors: [
      { name: "Blue", value: "#4A6B82" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "80% Recycled Polyester, 20% Elastane",
    image: "leggings",
    imageUrl: "images/women_7.png",
    imageQuality: "catalog",
    imageType: "women-bottom",
    alt: "Model wearing premium high-waisted leggings.",
    galleryImages: ["images/women_7.png"],
    description: "High-waist leggings with compression fit for yoga classes or intense cardio routines.",
    features: ["High Waisted", "4-Way Stretch", "Eco Friendly"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 8,
    name: "CoreX Performance Shorts",
    category: "Yoga",
    subCategory: "Shorts",
    gender: "women",
    price: 28,
    oldPrice: null,
    rating: 4.7,
    reviews: 45,
    colors: [
      { name: "Plum", value: "#5B3C46" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "88% Polyester, 12% Spandex",
    image: "shorts-w",
    imageUrl: "images/women_8.png",
    imageQuality: "catalog",
    imageType: "women-bottom",
    alt: "Model wearing gym training shorts.",
    galleryImages: ["images/women_8.png"],
    description: "Lightweight, breathable training shorts with a sweat-wicking liner and hidden pocket.",
    features: ["Sweat Wicking", "Inner Liner", "Waistband Pocket"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 9,
    name: "CoreX Zip Jacket",
    category: "Yoga",
    subCategory: "Jackets",
    gender: "women",
    price: 58,
    oldPrice: null,
    rating: 4.6,
    reviews: 51,
    colors: [
      { name: "Beige", value: "#EFE7DF" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "85% Cotton, 15% Polyester",
    image: "jacket",
    imageUrl: "images/women_9.png",
    imageQuality: "catalog",
    imageType: "women-top",
    alt: "Premium zip-up activewear jacket.",
    galleryImages: ["images/women_9.png"],
    description: "Premium zip-up jacket made with breathable French Terry cotton for post-workout warmth.",
    features: ["Zip Closure", "French Terry", "Breathable"],
    badge: null
  },
  {
    id: 10,
    name: "CoreX Active Set",
    category: "Yoga",
    subCategory: "Set",
    gender: "women",
    price: 68,
    oldPrice: null,
    rating: 4.9,
    reviews: 62,
    colors: [
      { name: "Beige", value: "#EFE7DF" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "82% Nylon, 18% Spandex",
    image: "active-set",
    imageUrl: "images/new-arrivals/corex-active-set.png",
    imageQuality: "catalog",
    imageType: "women-yoga",
    alt: "Model wearing ribbed activewear matching set.",
    galleryImages: ["images/new-arrivals/corex-active-set.png"],
    description: "Matching ribbed activewear set. Includes sports bra and high-waisted seamless leggings.",
    features: ["Matching Set", "Seamless Ribbed", "High Waist"],
    badge: "New"
  },

  // ==========================================
  // 2. MEN TAB PRODUCTS (ID 11-20)
  // ==========================================
  {
    id: 11,
    name: "CoreX Performance Tee",
    category: "Gym",
    subCategory: "Tops",
    gender: "men",
    price: 28,
    oldPrice: null,
    rating: 4.8,
    reviews: 178,
    colors: [
      { name: "Slate Grey", value: "#5D6A75" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "90% Polyester, 10% Spandex",
    image: "tee",
    imageUrl: "images/generated/men-corex-performance-tee.png",
    imageQuality: "catalog",
    imageType: "men-top",
    alt: "Male activewear gym t-shirt.",
    galleryImages: ["images/generated/men-corex-performance-tee.png"],
    description: "Engineered with anti-odor, sweat-wicking technology to keep you dry through heavy lifts.",
    features: ["Sweat Wicking", "Anti Odor", "Athletic Fit"],
    isBestSeller: true,
    badge: "Best Seller"
  },

  {
    id: 13,
    name: "CoreX Muscle Tank",
    category: "Gym",
    subCategory: "Tanks",
    gender: "men",
    price: 26,
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    colors: [
      { name: "Army Green", value: "#4A5D4E" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "60% Cotton, 40% Polyester blend",
    image: "muscle-tank",
    imageUrl: "images/men_3.png",
    imageQuality: "catalog",
    imageType: "men-top",
    alt: "Male athlete posing in a gym tank.",
    galleryImages: ["images/men_3.png"],
    description: "Showcase your hard work. This muscle tank is made from an ultra-breathable cotton-poly blend.",
    features: ["Ultra Breathable", "Raw Armholes", "Soft Blend"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 14,
    name: "CoreX Compression Tee",
    category: "Gym",
    subCategory: "Tops",
    gender: "men",
    price: 35,
    oldPrice: null,
    rating: 4.7,
    reviews: 98,
    colors: [
      { name: "White", value: "#FFFFFF" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "85% Polyester, 15% Elastane",
    image: "compression",
    imageUrl: "images/men_4.png",
    imageQuality: "catalog",
    imageType: "men-top",
    alt: "Male athlete wearing tight compression shirt.",
    galleryImages: ["images/men_4.png"],
    description: "A second-skin compression top that wraps and supports major muscle groups, boosting circulation.",
    features: ["High Compression", "Muscular Support", "Quick Dry"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 15,
    name: "CoreX Gym Shorts",
    category: "Gym",
    subCategory: "Shorts",
    gender: "men",
    price: 28,
    oldPrice: null,
    rating: 4.9,
    reviews: 140,
    colors: [
      { name: "Black", value: "#222222" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "86% Recycled Nylon, 14% Spandex",
    image: "shorts-m",
    imageUrl: "images/men_5.png",
    imageQuality: "catalog",
    imageType: "men-bottom",
    alt: "Male runner wearing flexible training shorts.",
    galleryImages: ["images/men_5.png"],
    description: "Engineered for squats and sprints. Lightweight, breathable flex fabric features zip utility pockets.",
    features: ["Zip Pockets", "4-Way Stretch", "Side Vents"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 16,
    name: "CoreX Training Pants",
    category: "Gym",
    subCategory: "Pants",
    gender: "men",
    price: 42,
    oldPrice: null,
    rating: 4.7,
    reviews: 102,
    colors: [
      { name: "Slate Grey", value: "#5D6A75" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "88% Polyester, 12% Spandex",
    image: "joggers",
    imageUrl: "images/men_6.png",
    imageQuality: "catalog",
    imageType: "men-bottom",
    alt: "Male model standing in athletic jogger pants.",
    galleryImages: ["images/men_6.png"],
    description: "Tapered-leg joggers with dynamic knee articulation and zippered security pockets.",
    features: ["Tapered Fit", "Zip Pockets", "Drawcord Waist"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 17,
    name: "CoreX Windbreaker",
    category: "Gym",
    subCategory: "Jackets",
    gender: "men",
    price: 88,
    oldPrice: null,
    rating: 4.8,
    reviews: 43,
    colors: [
      { name: "Black", value: "#222222" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Water-Resistant Nylon",
    image: "jacket",
    imageUrl: "images/men_7.png",
    imageQuality: "catalog",
    imageType: "men-top",
    alt: "Premium activewear windbreaker jacket.",
    galleryImages: ["images/men_7.png"],
    description: "Premium windbreaker jacket that offers lightweight protection against rain and wind during outdoor gym routines.",
    features: ["Water Resistant", "Wind Proof", "Zip Pockets"],
    badge: "Premium"
  },
  {
    id: 18,
    name: "CoreX 2-in-1 Shorts",
    category: "Gym",
    subCategory: "Shorts",
    gender: "men",
    price: 34,
    oldPrice: null,
    rating: 4.6,
    reviews: 57,
    colors: [
      { name: "Olive Green", value: "#4A5D4E" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "86% Polyester, 14% Spandex with compression liner",
    image: "shorts-m",
    imageUrl: "images/men_8.png",
    imageQuality: "catalog",
    imageType: "men-bottom",
    alt: "Male activewear 2-in-1 training shorts.",
    galleryImages: ["images/men_8.png"],
    description: "Features a light outer layer and supportive built-in compression liner for maximum mobility.",
    features: ["Built-in Liner", "Sweat Wicking", "Phone Pocket"],
    badge: null
  },
  {
    id: 19,
    name: "CoreX Long Sleeve Tee",
    category: "Gym",
    subCategory: "Tops",
    gender: "men",
    price: 32,
    oldPrice: null,
    rating: 4.7,
    reviews: 61,
    colors: [
      { name: "Grey Marl", value: "#888888" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "90% Polyester, 10% Spandex",
    image: "tee",
    imageUrl: "images/men_9.png",
    imageQuality: "catalog",
    imageType: "men-top",
    alt: "Male model in a long sleeve sports tee.",
    galleryImages: ["images/men_9.png"],
    description: "An athletic long sleeve shirt, perfect for warm-ups or cold-weather training sessions.",
    features: ["Thumbholes", "Thermal Control", "Quick Dry"],
    badge: null
  },
  {
    id: 20,
    name: "CoreX Active Set",
    category: "Gym",
    subCategory: "Set",
    gender: "men",
    price: 64,
    oldPrice: null,
    rating: 4.9,
    reviews: 35,
    colors: [
      { name: "Grey", value: "#888888" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "90% Polyester, 10% Spandex",
    image: "active-set",
    imageUrl: "images/men_10.png",
    imageQuality: "catalog",
    imageType: "men-top",
    alt: "Male model wearing matching activewear set.",
    galleryImages: ["images/men_10.png"],
    description: "Coordinated activewear top and bottom set designed for serious workouts and gym sessions.",
    features: ["Matching Set", "Athletic Fit", "Breathable"],
    badge: "Popular"
  },

  // ==========================================
  // 3. YOGA TAB PRODUCTS (ID 21-30)
  // ==========================================
  {
    id: 21,
    name: "CoreX Yoga Tank Top",
    category: "Yoga",
    subCategory: "Tops",
    gender: "women",
    price: 26,
    oldPrice: null,
    rating: 4.7,
    reviews: 77,
    colors: [
      { name: "Off-White", value: "#FAF5F0" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "92% Modal, 8% Spandex",
    image: "tank",
    imageUrl: "images/generated/yoga-corex-yoga-tank-top.png",
    imageQuality: "catalog",
    imageType: "women-top",
    alt: "Woman wearing racerback yoga tank top.",
    galleryImages: ["images/generated/yoga-corex-yoga-tank-top.png"],
    description: "A lightweight, breathable tank top with a relaxed fit and dropped armholes.",
    features: ["Breathable", "Sweat Wicking", "Light Support"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 22,
    name: "CoreX Seamless Leggings",
    category: "Yoga",
    subCategory: "Leggings",
    gender: "women",
    price: 46,
    oldPrice: null,
    rating: 4.8,
    reviews: 66,
    colors: [
      { name: "Grey Marl", value: "#888888" }
    ],
    sizes: ["S", "M", "L"],
    material: "90% Nylon, 10% Elastane",
    image: "rib-leggings",
    imageUrl: "images/generated/yoga-corex-seamless-leggings.png",
    imageQuality: "catalog",
    imageType: "women-bottom",
    alt: "Model standing in ribbed activewear leggings.",
    galleryImages: ["images/generated/yoga-corex-seamless-leggings.png"],
    description: "Experience zero distractions with our seamless ribbed leggings, providing contoured support.",
    features: ["Seamless Design", "High Support", "4-Way Stretch"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 23,
    name: "CoreX Yoga Set",
    category: "Yoga",
    subCategory: "Set",
    gender: "women",
    price: 62,
    oldPrice: null,
    rating: 4.9,
    reviews: 51,
    colors: [
      { name: "Sage Green", value: "#A6BCA9" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "82% Nylon, 18% Spandex",
    image: "active-set",
    imageUrl: "images/yoga_3.png",
    imageQuality: "catalog",
    imageType: "women-yoga",
    alt: "Model wearing premium yoga matching set.",
    galleryImages: ["images/yoga_3.png"],
    description: "A matching set featuring medium support sports bra and high-waisted seamless leggings.",
    features: ["Matching Set", "Sage Green", "Soft Feeling"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 24,
    name: "CoreX Longline Bra",
    category: "Yoga",
    subCategory: "Sports Bra",
    gender: "women",
    price: 32,
    oldPrice: null,
    rating: 4.7,
    reviews: 43,
    colors: [
      { name: "Blue", value: "#4A6B82" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "78% Nylon, 22% Spandex",
    image: "bra",
    imageUrl: "images/yoga_4.png",
    imageQuality: "catalog",
    imageType: "women-yoga",
    alt: "Premium blue longline sports bra.",
    galleryImages: ["images/yoga_4.png"],
    description: "Longline activewear bra offering high coverage and support for intensive yoga flows.",
    features: ["Longline Fit", "Medium Support", "Removable Pads"],
    isBestSeller: true,
    badge: "Best Seller"
  },

  {
    id: 26,
    name: "CoreX Ribbed Tank",
    category: "Yoga",
    subCategory: "Tops",
    gender: "women",
    price: 24,
    oldPrice: null,
    rating: 4.6,
    reviews: 38,
    colors: [
      { name: "Beige", value: "#EFE7DF" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "95% Modal, 5% Elastane",
    image: "tank",
    imageUrl: "images/yoga_6.png",
    imageQuality: "catalog",
    imageType: "women-top",
    alt: "Activewear ribbed tank top.",
    galleryImages: ["images/yoga_6.png"],
    description: "Soft ribbed tank top designed to stretch and move with your body.",
    features: ["Ribbed Texture", "High Stretch", "Comfort Fit"],
    badge: null
  },
  {
    id: 27,
    name: "CoreX High Waist Leggings",
    category: "Yoga",
    subCategory: "Leggings",
    gender: "women",
    price: 44,
    oldPrice: null,
    rating: 4.8,
    reviews: 56,
    colors: [
      { name: "Grey Marl", value: "#888888" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "80% Recycled Polyester, 20% Elastane",
    image: "leggings",
    imageUrl: "images/yoga_7.png",
    imageQuality: "catalog",
    imageType: "women-bottom",
    alt: "Model standing in high-waisted grey leggings.",
    galleryImages: ["images/yoga_7.png"],
    description: "High-waist leggings with moderate compression fit, ideal for yoga and meditation.",
    features: ["High Waisted", "Moderate Compression", "Breathable"],
    badge: null
  },
  {
    id: 28,
    name: "CoreX Yoga Shorts",
    category: "Yoga",
    subCategory: "Shorts",
    gender: "women",
    price: 28,
    oldPrice: null,
    rating: 4.7,
    reviews: 49,
    colors: [
      { name: "Sage Green", value: "#A6BCA9" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "88% Polyester, 12% Spandex",
    image: "shorts-w",
    imageUrl: "images/yoga_8.png",
    imageQuality: "catalog",
    imageType: "women-bottom",
    alt: "Model wearing sage green active shorts.",
    galleryImages: ["images/yoga_8.png"],
    description: "High-waisted yoga shorts with side pockets and a wide comfort waistband.",
    features: ["Side Pockets", "High Waisted", "4-Way Stretch"],
    badge: null
  },
  {
    id: 29,
    name: "CoreX Wrap Top",
    category: "Yoga",
    subCategory: "Tops",
    gender: "women",
    price: 30,
    oldPrice: null,
    rating: 4.8,
    reviews: 35,
    colors: [
      { name: "Beige", value: "#EFE7DF" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "92% Modal, 8% Spandex",
    image: "tank",
    imageUrl: "images/yoga_9.png",
    imageQuality: "catalog",
    imageType: "women-top",
    alt: "Model wearing premium wrap top.",
    galleryImages: ["images/yoga_9.png"],
    description: "Elegant wrap top designed to layer beautifully over sports bras during warm-up.",
    features: ["Wrap Design", "Soft Fabric", "Long Sleeve"],
    badge: null
  },
  {
    id: 30,
    name: "CoreX Meditation Mat",
    category: "Yoga",
    subCategory: "Yoga Mat",
    gender: "unisex",
    price: 46,
    oldPrice: null,
    rating: 4.9,
    reviews: 78,
    colors: [
      { name: "Beige", value: "#EFE7DF" }
    ],
    sizes: ["One Size"],
    material: "Natural Cork & TPE",
    image: "mat",
    imageUrl: "images/yoga_10.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Beige yoga and meditation mat.",
    galleryImages: ["images/yoga_10.png"],
    description: "Premium cork meditation and yoga mat providing excellent traction and grip.",
    features: ["Natural Cork", "Anti Slip", "Cushioned Base"],
    badge: "Premium"
  },

  // ==========================================
  // 4. ACCESSORIES TAB PRODUCTS (ID 31-40)
  // ==========================================
  {
    id: 31,
    name: "CoreX Yoga Mat (5mm)",
    category: "Accessories",
    subCategory: "Yoga Mat",
    gender: "unisex",
    price: 48,
    oldPrice: null,
    rating: 4.9,
    reviews: 175,
    colors: [
      { name: "Light Blue", value: "#B2C5D4" }
    ],
    sizes: ["One Size"],
    material: "Natural Rubber & Polyurethane",
    image: "mat",
    imageUrl: "images/accessories/corex-yoga-mat.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Rolled up light blue yoga mat.",
    galleryImages: ["images/accessories/corex-yoga-mat.png"],
    description: "5mm of dense cushioned support. Texturized grip surface made from biodegradable natural rubber.",
    features: ["Premium Cushioning", "High Grip", "Carry Strap"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 32,
    name: "CoreX Gym Backpack",
    category: "Accessories",
    subCategory: "Backpack",
    gender: "unisex",
    price: 58,
    oldPrice: null,
    rating: 4.8,
    reviews: 112,
    colors: [
      { name: "Black", value: "#222222" }
    ],
    sizes: ["One Size"],
    material: "Water-Resistant Cordura Nylon",
    image: "backpack",
    imageUrl: "images/accessories/corex-gym-backpack.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Black gym backpack.",
    galleryImages: ["images/accessories/corex-gym-backpack.png"],
    description: "A water-resistant backpack featuring a dedicated laptop sleeve and shoe compartment.",
    features: ["Water Resistant", "Shoe Compartment", "Laptop Sleeve"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 33,
    name: "CoreX Water Bottle",
    category: "Accessories",
    subCategory: "Bottle",
    gender: "unisex",
    price: 22,
    oldPrice: null,
    rating: 4.7,
    reviews: 90,
    colors: [
      { name: "Off-White", value: "#FAF5F0" }
    ],
    sizes: ["One Size"],
    material: "18/8 Food-Grade Stainless Steel",
    image: "bottle",
    imageUrl: "images/accessories/corex-water-bottle.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Stainless steel water bottle.",
    galleryImages: ["images/accessories/corex-water-bottle.png"],
    description: "Double-wall vacuum insulated stainless steel water bottle. Keeps drinks cold for 24 hours.",
    features: ["Insulated", "Stainless Steel", "BPA Free"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 34,
    name: "CoreX Yoga Strap",
    category: "Accessories",
    subCategory: "Strap",
    gender: "unisex",
    price: 18,
    oldPrice: null,
    rating: 4.6,
    reviews: 32,
    colors: [
      { name: "Beige", value: "#EFE7DF" }
    ],
    sizes: ["One Size"],
    material: "100% Durable Cotton",
    image: "bands",
    imageUrl: "images/accessories/corex-yoga-strap.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Beige yoga strap.",
    galleryImages: ["images/accessories/corex-yoga-strap.png"],
    description: "Premium cotton yoga strap with metal D-ring buckle to assist with poses and flexibility.",
    features: ["Durable Cotton", "Metal D-Ring", "Flexibility Assist"],
    badge: null
  },
  {
    id: 35,
    name: "CoreX Yoga Block",
    category: "Accessories",
    subCategory: "Block",
    gender: "unisex",
    price: 18,
    oldPrice: null,
    rating: 4.7,
    reviews: 41,
    colors: [
      { name: "Beige", value: "#EFE7DF" }
    ],
    sizes: ["One Size"],
    material: "High-Density EVA Foam",
    image: "block",
    imageUrl: "images/accessories/corex-yoga-block.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Beige yoga block.",
    galleryImages: ["images/accessories/corex-yoga-block.png"],
    description: "High-density EVA foam block providing support, height and alignment for yoga classes.",
    features: ["High Density", "Beveled Edges", "Lightweight"],
    badge: null
  },
  {
    id: 36,
    name: "CoreX Foam Roller",
    category: "Accessories",
    subCategory: "Roller",
    gender: "unisex",
    price: 28,
    oldPrice: null,
    rating: 4.8,
    reviews: 54,
    colors: [
      { name: "Black", value: "#222222" }
    ],
    sizes: ["One Size"],
    material: "High-Density EVA Foam with rigid core",
    image: "roller",
    imageUrl: "images/accessories/corex-foam-roller.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Black foam roller.",
    galleryImages: ["images/accessories/corex-foam-roller.png"],
    description: "Trigger-point foam roller designed for deep tissue massage and muscle recovery post-workout.",
    features: ["Grid Surface", "Rigid Core", "Muscle Recovery"],
    isBestSeller: true,
    badge: "Best Seller"
  },
  {
    id: 37,
    name: "CoreX Resistance Band",
    category: "Accessories",
    subCategory: "Bands",
    gender: "unisex",
    price: 18,
    oldPrice: null,
    rating: 4.7,
    reviews: 66,
    colors: [
      { name: "Plum", value: "#5B3C46" }
    ],
    sizes: ["One Size"],
    material: "Fabric Elastic & Latex",
    image: "bands",
    imageUrl: "images/accessories/corex-resistance-band.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Plum resistance band.",
    galleryImages: ["images/accessories/corex-resistance-band.png"],
    description: "Premium fabric resistance loop band that doesn't roll or slip, perfect for glute training.",
    features: ["Non-Slip Fabric", "Glute Activation", "Durable Stitches"],
    badge: null
  },
  {
    id: 38,
    name: "CoreX Cap",
    category: "Accessories",
    subCategory: "Cap",
    gender: "unisex",
    price: 18,
    oldPrice: null,
    rating: 4.5,
    reviews: 50,
    colors: [
      { name: "White", value: "#FFFFFF" }
    ],
    sizes: ["One Size"],
    material: "100% Quick-Dry Polyester",
    image: "cap",
    imageUrl: "images/accessories/corex-cap.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "White sports cap.",
    galleryImages: ["images/accessories/corex-cap.png"],
    description: "Lightweight, breathable sports cap with adjustable back strap and sweat-wicking band.",
    features: ["Quick Dry", "Adjustable Fit", "Reflective Detail"],
    badge: null
  },
  {
    id: 39,
    name: "CoreX Socks",
    category: "Accessories",
    subCategory: "Socks",
    gender: "unisex",
    price: 12,
    oldPrice: null,
    rating: 4.6,
    reviews: 29,
    colors: [
      { name: "White", value: "#FFFFFF" }
    ],
    sizes: ["S/M", "L/XL"],
    material: "80% Cotton, 18% Polyester, 2% Spandex",
    image: "socks",
    imageUrl: "images/accessories/corex-socks.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "White athletic socks.",
    galleryImages: ["images/accessories/corex-socks.png"],
    description: "Cushioned athletic crew socks with arch support and sweat-wicking ventilation panels.",
    features: ["Arch Support", "Cushioned Sole", "Sweat Wicking"],
    badge: null
  },
  {
    id: 40,
    name: "CoreX Towel",
    category: "Accessories",
    subCategory: "Towel",
    gender: "unisex",
    price: 16,
    oldPrice: null,
    rating: 4.7,
    reviews: 33,
    colors: [
      { name: "Grey", value: "#888888" }
    ],
    sizes: ["One Size"],
    material: "85% Polyester, 15% Nylon Microfiber",
    image: "towel",
    imageUrl: "images/accessories/corex-towel.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Grey microfibre fitness towel.",
    galleryImages: ["images/accessories/corex-towel.png"],
    description: "Ultra-absorbent, quick-drying microfiber gym towel. Compact and lightweight for yoga sessions.",
    features: ["Microfiber", "Quick Dry", "Absorbent"],
    badge: null
  },

  // ==========================================
  // 5. NEW ARRIVAL TAB PRODUCTS (ID 41-50)
  // ==========================================
  {
    id: 41,
    name: "CoreX Elevate Zip Jacket",
    category: "Yoga",
    subCategory: "Jackets",
    gender: "women",
    price: 58,
    oldPrice: null,
    rating: 4.6,
    reviews: 54,
    colors: [
      { name: "Beige", value: "#EFE7DF" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "85% Cotton, 15% Polyester",
    image: "jacket",
    imageUrl: "images/new-arrivals/corex-elevate-zip-jacket.png",
    imageQuality: "catalog",
    imageType: "women-top",
    alt: "Beige activewear zip jacket.",
    galleryImages: ["images/new-arrivals/corex-elevate-zip-jacket.png"],
    description: "Throw it on post-flow. Made with breathable French Terry cotton for plush warmth.",
    features: ["Zip Closure", "French Terry", "Breathable"],
    isNewArrival: true,
    badge: "New"
  },
  {
    id: 42,
    name: "CoreX Sculpt Leggings",
    category: "Yoga",
    subCategory: "Leggings",
    gender: "women",
    price: 48,
    oldPrice: null,
    rating: 4.8,
    reviews: 31,
    colors: [
      { name: "Black", value: "#222222" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "80% Nylon, 20% Spandex",
    image: "leggings",
    imageUrl: "images/new-arrivals/corex-sculpt-leggings.png",
    imageQuality: "catalog",
    imageType: "women-bottom",
    alt: "Model standing wearing sculpt leggings.",
    galleryImages: ["images/new-arrivals/corex-sculpt-leggings.png"],
    description: "Body-sculpting leggings featuring raw edge seams and targeted high waistband support.",
    features: ["Body Sculpting", "High Waist", "Hidden Key Pocket"],
    isNewArrival: true,
    badge: "New"
  },
  {
    id: 43,
    name: "CoreX Air Tee",
    category: "Gym",
    subCategory: "Tops",
    gender: "men",
    price: 28,
    oldPrice: null,
    rating: 4.7,
    reviews: 42,
    colors: [
      { name: "White", value: "#FFFFFF" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "90% Polyester, 10% Elastane",
    image: "tee",
    imageUrl: "images/new-arrivals/corex-air-tee.png",
    imageQuality: "catalog",
    imageType: "men-top",
    alt: "Male athletic tee shirt.",
    galleryImages: ["images/new-arrivals/corex-air-tee.png"],
    description: "Extremely lightweight and ventilated training t-shirt for maximum airflow during gym flow.",
    features: ["Mesh Vents", "Feather Weight", "Quick Dry"],
    isNewArrival: true,
    badge: "New"
  },
  {
    id: 44,
    name: "CoreX Hybrid Shorts",
    category: "Gym",
    subCategory: "Shorts",
    gender: "men",
    price: 32,
    oldPrice: null,
    rating: 4.6,
    reviews: 38,
    colors: [
      { name: "Olive Green", value: "#4A5D4E" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "88% Recycled Nylon, 12% Spandex",
    image: "shorts-m",
    imageUrl: "images/new-arrivals/corex-hybrid-shorts.png",
    imageQuality: "catalog",
    imageType: "men-bottom",
    alt: "Male activewear hybrid shorts.",
    galleryImages: ["images/new-arrivals/corex-hybrid-shorts.png"],
    description: "Versatile gym shorts built with dry-fast hybrid fabric and zippered security pocket.",
    features: ["Hybrid Fabric", "Zip Pocket", "Water Repellent"],
    isNewArrival: true,
    badge: "New"
  },
  {
    id: 45,
    name: "CoreX Seamless Bra",
    category: "Yoga",
    subCategory: "Sports Bra",
    gender: "women",
    price: 34,
    oldPrice: null,
    rating: 4.7,
    reviews: 30,
    colors: [
      { name: "Mauve", value: "#B89EA6" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "78% Nylon, 22% Spandex",
    image: "bra",
    imageUrl: "images/new-arrivals/corex-seamless-bra.png",
    imageQuality: "catalog",
    imageType: "women-yoga",
    alt: "Seamless mauve sports bra.",
    galleryImages: ["images/new-arrivals/corex-seamless-bra.png"],
    description: "Seamless knitted activewear bra designed to eliminate skin chafing and rub during runs.",
    features: ["Seamless Knit", "Light Support", "Moisture Wicking"],
    isNewArrival: true,
    badge: "New"
  },

  {
    id: 47,
    name: "CoreX Cropped Hoodie",
    category: "Yoga",
    subCategory: "Jackets",
    gender: "women",
    price: 54,
    oldPrice: null,
    rating: 4.8,
    reviews: 47,
    colors: [
      { name: "Beige", value: "#EFE7DF" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "85% Cotton, 15% Polyester",
    image: "jacket",
    imageUrl: "images/new-arrivals/corex-cropped-hoodie.png",
    imageQuality: "catalog",
    imageType: "women-top",
    alt: "Cropped sports hoodie.",
    galleryImages: ["images/new-arrivals/corex-cropped-hoodie.png"],
    description: "Buttery-soft cropped pullover hoodie for quick throwing on after yoga session.",
    features: ["Cropped Hem", "French Terry", "Comfort Hood"],
    isNewArrival: true,
    badge: "New"
  },

  {
    id: 49,
    name: "CoreX Active Set",
    category: "Yoga",
    subCategory: "Set",
    gender: "women",
    price: 54,
    oldPrice: null,
    rating: 4.8,
    reviews: 32,
    colors: [
      { name: "Sage Green", value: "#A6BCA9" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "82% Nylon, 18% Spandex",
    image: "active-set",
    imageUrl: "images/generated/new-arrival-corex-active-set.png",
    imageQuality: "catalog",
    imageType: "women-yoga",
    alt: "Sage green matching set.",
    galleryImages: ["images/generated/new-arrival-corex-active-set.png"],
    description: "A beautiful matching activewear crop top and shorts set in sage green tone.",
    features: ["Matching Set", "Sage Green", "Ultra Lightweight"],
    isNewArrival: true,
    badge: "New"
  },
  {
    id: 50,
    name: "CoreX Performance Pants",
    category: "Gym",
    subCategory: "Pants",
    gender: "men",
    price: 44,
    oldPrice: null,
    rating: 4.7,
    reviews: 36,
    colors: [
      { name: "Black", value: "#222222" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "88% Polyester, 12% Spandex",
    image: "joggers",
    imageUrl: "images/new-arrivals/corex-performance-pants.png",
    imageQuality: "catalog",
    imageType: "men-bottom",
    alt: "Male model in gym training pants.",
    galleryImages: ["images/new-arrivals/corex-performance-pants.png"],
    description: "High performance running pants with elastic waistband and zippered cuffs for easy adjust.",
    features: ["Zippered Cuffs", "Water Repellent", "Zip Pockets"],
    isNewArrival: true,
    badge: "New"
  },

  // ==========================================
  // 6. SALE TAB PRODUCTS (ID 51-60)
  // ==========================================
  {
    id: 51,
    name: "CoreX Sports Bra",
    category: "Yoga",
    subCategory: "Sports Bra",
    gender: "women",
    price: 25.60,
    oldPrice: 32.00,
    rating: 4.8,
    reviews: 128,
    colors: [
      { name: "Mauve", value: "#B89EA6" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "78% Nylon, 22% Spandex",
    image: "bra",
    imageUrl: "images/sale_1.png",
    imageQuality: "catalog",
    imageType: "women-yoga",
    alt: "Model wearing premium sports bra on sale.",
    galleryImages: ["images/sale_1.png"],
    description: "Medium support sports bra designed for yoga, pilates and everyday movement. Soft and breathable.",
    features: ["Medium Support", "Sweat Wicking", "Sale Item"],
    isSale: true,
    badge: "Sale"
  },
  {
    id: 52,
    name: "CoreX Leggings",
    category: "Yoga",
    subCategory: "Leggings",
    gender: "women",
    price: 36.00,
    oldPrice: 45.00,
    rating: 4.9,
    reviews: 96,
    colors: [
      { name: "Mauve", value: "#B89EA6" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "80% Recycled Polyester, 20% Elastane",
    image: "leggings",
    imageUrl: "images/sale_2.png",
    imageQuality: "catalog",
    imageType: "women-bottom",
    alt: "Model wearing premium leggings on sale.",
    galleryImages: ["images/sale_2.png"],
    description: "Our buttery-soft leggings feature a high-rise waist and minimal seams to keep you focused on flow.",
    features: ["High Waisted", "4-Way Stretch", "Sale Item"],
    isSale: true,
    badge: "Sale"
  },

  {
    id: 54,
    name: "CoreX Gym Shorts",
    category: "Gym",
    subCategory: "Shorts",
    gender: "men",
    price: 22.40,
    oldPrice: 28.00,
    rating: 4.9,
    reviews: 140,
    colors: [
      { name: "Black", value: "#222222" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "86% Recycled Nylon, 14% Spandex",
    image: "shorts-m",
    imageUrl: "images/sale_4.png",
    imageQuality: "catalog",
    imageType: "men-bottom",
    alt: "Male training shorts on sale.",
    galleryImages: ["images/sale_4.png"],
    description: "Engineered for squats and sprints. Lightweight, breathable flex fabric features zip pockets.",
    features: ["Zip Pockets", "4-Way Stretch", "Sale Item"],
    isSale: true,
    badge: "Sale"
  },
  {
    id: 55,
    name: "CoreX Zip Jacket",
    category: "Yoga",
    subCategory: "Jackets",
    gender: "women",
    price: 40.60,
    oldPrice: 58.00,
    rating: 4.6,
    reviews: 51,
    colors: [
      { name: "Beige", value: "#EFE7DF" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "85% Cotton, 15% Polyester",
    image: "jacket",
    imageUrl: "images/sale_5.png",
    imageQuality: "catalog",
    imageType: "women-top",
    alt: "Zip activewear jacket on sale.",
    galleryImages: ["images/sale_5.png"],
    description: "Premium zip-up jacket made with breathable French Terry cotton for post-workout warmth.",
    features: ["Zip Closure", "French Terry", "Sale Item"],
    isSale: true,
    badge: "Sale"
  },
  {
    id: 56,
    name: "CoreX Yoga Set",
    category: "Yoga",
    subCategory: "Set",
    gender: "women",
    price: 49.60,
    oldPrice: 62.00,
    rating: 4.9,
    reviews: 51,
    colors: [
      { name: "Sage Green", value: "#A6BCA9" }
    ],
    sizes: ["XS", "S", "M", "L"],
    material: "82% Nylon, 18% Spandex",
    image: "active-set",
    imageUrl: "images/sale_6.png",
    imageQuality: "catalog",
    imageType: "women-yoga",
    alt: "Matching active set on sale.",
    galleryImages: ["images/sale_6.png"],
    description: "A matching set featuring medium support sports bra and high-waisted seamless leggings.",
    features: ["Matching Set", "High Waist", "Sale Item"],
    isSale: true,
    badge: "Sale"
  },
  {
    id: 57,
    name: "CoreX Muscle Tank",
    category: "Gym",
    subCategory: "Tanks",
    gender: "men",
    price: 20.80,
    oldPrice: 26.00,
    rating: 4.8,
    reviews: 65,
    colors: [
      { name: "Army Green", value: "#4A5D4E" }
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "60% Cotton, 40% Polyester blend",
    image: "muscle-tank",
    imageUrl: "images/sale_7.png",
    imageQuality: "catalog",
    imageType: "men-top",
    alt: "Athletic muscle tank on sale.",
    galleryImages: ["images/sale_7.png"],
    description: "Showcase your hard work. This muscle tank is made from an ultra-breathable cotton-poly blend.",
    features: ["Ultra Breathable", "Raw Armholes", "Sale Item"],
    isSale: true,
    badge: "Sale"
  },
  {
    id: 58,
    name: "CoreX Backpack",
    category: "Accessories",
    subCategory: "Backpack",
    gender: "unisex",
    price: 49.30,
    oldPrice: 58.00,
    rating: 4.8,
    reviews: 112,
    colors: [
      { name: "Black", value: "#222222" }
    ],
    sizes: ["One Size"],
    material: "Water-Resistant Cordura Nylon",
    image: "backpack",
    imageUrl: "images/sale_8.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Gym backpack on sale.",
    galleryImages: ["images/sale_8.png"],
    description: "A water-resistant backpack featuring a dedicated laptop sleeve and shoe compartment.",
    features: ["Water Resistant", "Shoe Compartment", "Sale Item"],
    isSale: true,
    badge: "Sale"
  },
  {
    id: 59,
    name: "CoreX Yoga Mat",
    category: "Accessories",
    subCategory: "Yoga Mat",
    gender: "unisex",
    price: 38.40,
    oldPrice: 48.00,
    rating: 4.9,
    reviews: 175,
    colors: [
      { name: "Light Blue", value: "#B2C5D4" }
    ],
    sizes: ["One Size"],
    material: "Natural Rubber & Polyurethane",
    image: "mat",
    imageUrl: "images/sale_9.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Premium yoga mat on sale.",
    galleryImages: ["images/sale_9.png"],
    description: "5mm of dense cushioned support. Texturized grip surface made from biodegradable natural rubber.",
    features: ["Premium Cushioning", "High Grip", "Sale Item"],
    isSale: true,
    badge: "Sale"
  },
  {
    id: 60,
    name: "CoreX Cap",
    category: "Accessories",
    subCategory: "Cap",
    gender: "unisex",
    price: 14.40,
    oldPrice: 18.00,
    rating: 4.5,
    reviews: 50,
    colors: [
      { name: "White", value: "#FFFFFF" }
    ],
    sizes: ["One Size"],
    material: "100% Quick-Dry Polyester",
    image: "cap",
    imageUrl: "images/accessories/corex-cap.png",
    imageQuality: "catalog",
    imageType: "accessory",
    alt: "Sports cap on sale.",
    galleryImages: ["images/sale_10.png"],
    description: "Lightweight, breathable sports cap with adjustable back strap and sweat-wicking band.",
    features: ["Quick Dry", "Adjustable Fit", "Sale Item"],
    isSale: true,
    badge: "Sale"
  }
];

// ==========================================
// 1.1 COLLECTION + BADGE HELPERS
// The homepage best-seller modules reuse the exact same product
// objects rendered by the main Women/Men/Yoga/Accessories menu tabs.
// ==========================================
const COLLECTION_RANGES = Object.freeze({
  women: [1, 10],
  men: [11, 20],
  yoga: [21, 30],
  accessories: [31, 40],
  new: [41, 50],
  sale: [51, 60]
});

function getCollectionProducts(collection) {
  const range = COLLECTION_RANGES[collection];
  if (!range) return [...PRODUCTS];
  const [start, end] = range;
  return PRODUCTS.filter(product => product.id >= start && product.id <= end);
}

function getProductCollection(product) {
  return Object.entries(COLLECTION_RANGES)
    .find(([, range]) => product.id >= range[0] && product.id <= range[1])?.[0] || "all";
}

function getProductBadge(product) {
  return product.isBestSeller ? "Best Seller" : product.badge;
}



// ==========================================
// 2. STATE MANAGER
// ==========================================
const state = {
  cart: [],
  wishlist: [],
  currentUser: null,
  activeCoupon: null,
  activeFilters: {
    category: [],
    size: [],
    color: [],
    priceMin: "",
    priceMax: "",
    material: []
  },
  activeSort: "featured",
  activeProduct: null,
  activeCategory: "all",
  currentView: "home"
};

function formatPrice(usdPrice) {
  if (!usdPrice && usdPrice !== 0) return "";
  const vndPrice = usdPrice * 25000;
  return vndPrice.toLocaleString("vi-VN") + " đ";
}

// ==========================================
// 3. STORAGE ENGINE
// ==========================================
function saveToStorage() {
  localStorage.setItem("corex_cart", JSON.stringify(state.cart));
  localStorage.setItem("corex_wishlist", JSON.stringify(state.wishlist));
  localStorage.setItem("corex_user", JSON.stringify(state.currentUser));
}

function readStoredJson(key, fallback) {
  try {
    const rawValue = localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch (error) {
    console.warn(`COREX: Could not read ${key} from local storage.`, error);
    localStorage.removeItem(key);
    return fallback;
  }
}

function isLegacyDemoCart(cart) {
  if (!Array.isArray(cart) || cart.length !== 2) return false;

  const productIds = cart
    .map(item => Number(item?.product?.id))
    .sort((a, b) => a - b);

  return productIds.length === 2
    && productIds[0] === 1
    && productIds[1] === 2
    && cart.every(item => Number(item?.quantity) === 1);
}

function loadFromStorage() {
  const cartData = readStoredJson("corex_cart", []);
  const wishlistData = readStoredJson("corex_wishlist", []);
  const userData = readStoredJson("corex_user", null);

  state.cart = Array.isArray(cartData) ? cartData : [];
  state.wishlist = Array.isArray(wishlistData) ? wishlistData : [];
  state.currentUser = userData || null;

  // Remove the two seeded presentation products created by older versions.
  // Carts stay empty by default, while carts created by a real user are preserved.
  if (isLegacyDemoCart(state.cart)) {
    state.cart = [];
    saveToStorage();
  }
}

// ==========================================
// 4. TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="toast-close-btn">&times;</button>
  `;

  container.appendChild(toast);

  const timer = setTimeout(() => {
    toast.style.animation = "fadeOut 0.3s forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);

  toast.querySelector(".toast-close-btn").addEventListener("click", () => {
    clearTimeout(timer);
    toast.remove();
  });
}

// ==========================================
// 5. VIEW ROUTER
// ==========================================
const ROUTABLE_VIEWS = new Set(["home", "shop", "detail", "cart", "checkout", "wishlist", "success"]);

function buildRouteHash(view, params = {}) {
  const safeView = ROUTABLE_VIEWS.has(view) ? view : "home";
  const query = new URLSearchParams();

  if (safeView === "shop" && params.category && params.category !== "all") {
    query.set("category", params.category);
  }

  if (safeView === "detail" && params.id) {
    query.set("id", String(params.id));
  }

  const queryString = query.toString();
  return `#${safeView}${queryString ? `?${queryString}` : ""}`;
}

function parseRouteHash(hash = window.location.hash) {
  const rawRoute = (hash || "").replace(/^#/, "").trim();
  if (!rawRoute) return { view: "home", params: {} };

  const [viewPart, queryString = ""] = rawRoute.split("?");
  const view = ROUTABLE_VIEWS.has(viewPart) ? viewPart : "home";
  const query = new URLSearchParams(queryString);
  const params = {};

  if (view === "shop") {
    params.category = query.get("category") || "all";
  }

  if (view === "detail") {
    const productId = Number(query.get("id"));
    if (Number.isFinite(productId) && productId > 0) {
      params.id = productId;
    } else {
      return { view: "home", params: {} };
    }
  }

  return { view, params };
}

function syncBrowserRoute(view, params = {}, replace = false) {
  const nextHash = buildRouteHash(view, params);
  if (window.location.hash === nextHash) return;

  if (replace) {
    window.history.replaceState(null, "", nextHash);
  } else {
    window.location.hash = nextHash;
  }
}

function navigateTo(view, params = {}, options = {}) {
  const settings = {
    updateUrl: true,
    replace: false,
    ...options
  };

  const safeView = ROUTABLE_VIEWS.has(view) ? view : "home";
  state.currentView = safeView;
  window.scrollTo({ top: 0, behavior: "auto" });

  document.querySelectorAll(".view-section").forEach(section => {
    section.classList.remove("active-view");
  });

  const targetSection = document.getElementById(`${safeView}-view`);
  if (targetSection) {
    targetSection.classList.add("active-view");
  }

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
  });

  if (safeView === "home") {
    document.querySelector('.nav-link[onclick*="navigateTo(\'home\'"]')?.classList.add("active");
  } else if (safeView === "shop") {
    const category = params.category || "all";
    state.activeCategory = category;

    if (!params.keepFilters) {
      resetFilters();
    }

    document.querySelectorAll(`.nav-link[data-category="${category}"]`).forEach(link => {
      link.classList.add("active");
    });

    renderShopView();
  } else if (safeView === "detail") {
    if (params.id) {
      const product = PRODUCTS.find(item => item.id === Number(params.id));
      if (product) {
        state.activeProduct = product;
        renderProductDetailView();
      } else {
        state.currentView = "home";
        document.getElementById("home-view")?.classList.add("active-view");
      }
    }
  } else if (safeView === "cart") {
    renderCartView();
  } else if (safeView === "checkout") {
    renderCheckoutView();
  } else if (safeView === "wishlist") {
    renderWishlistView();
  }

  updateBadges();
  closeMobileMenu();

  if (settings.updateUrl) {
    syncBrowserRoute(safeView, params, settings.replace);
  }
}

function restoreRouteFromLocation() {
  const route = parseRouteHash();
  navigateTo(route.view, route.params, { updateUrl: false });
}

// ==========================================
// 6. RENDER ENGINE: HEADER & BADGES
// ==========================================
function updateBadges() {
  const cartCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = state.wishlist.length;

  document.querySelectorAll(".cart-badge").forEach(b => {
    b.textContent = cartCount;
    b.style.display = cartCount > 0 ? "flex" : "none";
  });

  document.querySelectorAll(".wishlist-badge").forEach(b => {
    b.textContent = wishlistCount;
    b.style.display = wishlistCount > 0 ? "flex" : "none";
  });
}

// ==========================================
// 7. RENDER ENGINE: SVG GRAPHICS GENERATORS
// ==========================================
function getProductSVGPlaceholder(imageType, activeColor = "#FAF5F0", name = "") {
  let innerSVG = "";
  
  switch (imageType) {
    case "bra":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <path d="M 60 160 C 60 110, 240 110, 240 160 C 240 180, 210 200, 190 200 C 190 210, 190 230, 170 235 C 150 240, 150 240, 130 235 C 110 230, 110 210, 110 200 C 90 200, 60 180, 60 160 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <path d="M 90 125 C 100 100, 110 90, 120 90 L 130 90 C 140 90, 150 100, 160 125" stroke="#111" stroke-width="1.5" fill="none" />
        <path d="M 140 125 C 150 100, 160 90, 170 90 L 180 90 C 190 90, 200 100, 210 125" stroke="#111" stroke-width="1.5" fill="none" />
      `;
      break;
    case "leggings":
    case "rib-leggings":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <path d="M 100 80 L 200 80 L 210 150 L 180 340 L 152 340 L 150 190 L 148 190 L 146 340 L 118 340 L 90 150 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <path d="M 100 130 L 200 130" stroke="#111" stroke-width="1" stroke-dasharray="3,3" opacity="0.5" />
      `;
      break;
    case "tank":
    case "tank-m":
    case "muscle-tank":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <path d="M 85 80 C 105 80, 105 105, 120 105 C 135 105, 135 80, 155 80 L 175 100 C 165 140, 175 180, 170 270 L 70 270 C 65 180, 75 140, 65 100 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
      `;
      break;
    case "hoodie":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <path d="M 70 110 L 95 85 L 145 85 L 170 110 L 200 130 L 180 150 L 160 135 L 160 210 L 80 210 L 80 135 L 60 150 L 40 130 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <path d="M 95 85 C 95 65, 145 65, 145 85 Z" fill="${activeColor}" stroke="#111" stroke-width="1" />
      `;
      break;
    case "shorts-w":
    case "shorts-m":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <path d="M 90 90 L 210 90 L 220 170 L 160 170 L 150 125 L 140 125 L 130 170 L 70 170 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
      `;
      break;
    case "long-sleeve":
    case "compression":
    case "tee":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <path d="M 80 90 L 100 80 L 140 80 L 160 90 L 200 130 L 185 145 L 155 115 L 155 240 L 85 240 L 85 115 L 55 145 L 40 130 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
      `;
      break;
    case "jumpsuit":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <path d="M 100 60 L 140 60 L 150 130 L 155 280 L 142 280 L 140 170 L 100 170 L 98 280 L 85 280 L 90 130 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <path d="M 100 60 C 100 45, 140 45, 140 60" stroke="#111" stroke-width="1.5" fill="none" />
      `;
      break;
    case "joggers":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <path d="M 95 80 L 205 80 L 212 140 L 182 330 L 158 330 L 150 175 L 148 175 L 140 330 L 116 330 L 86 140 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <path d="M 98 210 L 132 210" stroke="#111" stroke-width="0.8" />
        <path d="M 166 210 L 200 210" stroke="#111" stroke-width="0.8" />
      `;
      break;
    case "cap":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <path d="M 80 180 C 80 120, 180 120, 180 180 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" />
        <path d="M 165 180 C 195 180, 220 190, 220 195 C 220 200, 180 200, 155 190" fill="${activeColor}" stroke="#111" stroke-width="1.5" />
      `;
      break;
    case "mat":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <ellipse cx="150" cy="120" rx="35" ry="18" fill="none" stroke="#111" stroke-width="1.5" />
        <path d="M 115 120 L 115 260 C 115 278, 185 278, 185 260 L 185 120" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <ellipse cx="150" cy="260" rx="35" ry="18" fill="${activeColor}" stroke="#111" stroke-width="1" />
        <path d="M 130 160 L 170 160 M 130 190 L 170 190 M 130 220 L 170 220" stroke="#111" stroke-width="1" opacity="0.6" />
      `;
      break;
    case "backpack":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <rect x="90" y="90" width="120" height="180" rx="20" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <rect x="100" y="180" width="100" height="80" rx="10" fill="${activeColor}" stroke="#111" stroke-width="1.2" />
        <path d="M 120 90 L 120 70 C 120 65, 180 65, 180 70 L 180 90" fill="none" stroke="#111" stroke-width="1.5" />
      `;
      break;
    case "bottle":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_${imageType})" />
        <path d="M 120 90 L 180 90 L 180 120 L 195 140 L 195 270 C 195 280, 105 280, 105 270 L 105 140 L 120 120 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <rect x="135" y="65" width="30" height="25" rx="2" fill="#222" stroke="#111" stroke-width="1" />
      `;
      break;
    case "block":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_mat)" />
        <rect x="72" y="120" width="155" height="110" rx="12" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <path d="M 85 140 H 215 M 85 165 H 215" stroke="#111" stroke-width="1" opacity="0.35" />
      `;
      break;
    case "roller":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_mat)" />
        <ellipse cx="150" cy="135" rx="64" ry="22" fill="${activeColor}" stroke="#111" stroke-width="1.5" />
        <path d="M 86 135 V 232 C 86 262, 214 262, 214 232 V135" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <ellipse cx="150" cy="232" rx="64" ry="22" fill="${activeColor}" stroke="#111" stroke-width="1.2" />
      `;
      break;
    case "bands":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_mat)" />
        <path d="M 75 190 C 75 110, 225 110, 225 190 C 225 270, 75 270, 75 190 Z" fill="none" stroke="${activeColor}" stroke-width="34" />
        <path d="M 82 190 C 82 124, 218 124, 218 190 C 218 256, 82 256, 82 190 Z" fill="none" stroke="#111" stroke-width="1.2" opacity="0.45" />
      `;
      break;
    case "socks":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_cap)" />
        <path d="M 94 88 H 142 V 205 L 185 225 C 204 234, 202 260, 180 265 H 95 C 74 265, 72 238, 90 228 L 100 220 Z" fill="${activeColor}" stroke="#111" stroke-width="1.5" />
        <path d="M 154 98 H 202 V 205 L 236 225 C 255 234, 253 260, 231 265 H 154" fill="${activeColor}" stroke="#111" stroke-width="1.5" />
      `;
      break;
    case "towel":
      innerSVG = `
        <rect width="100%" height="100%" fill="url(#grad_mat)" />
        <rect x="72" y="105" width="155" height="165" rx="10" fill="${activeColor}" stroke="#111" stroke-width="1.5" opacity="0.9" />
        <path d="M 93 132 H 208 M 93 164 H 208 M 93 196 H 208" stroke="#111" stroke-width="1" opacity="0.3" />
      `;
      break;
    default:
      innerSVG = `<rect width="100%" height="100%" fill="#E7E1DC" />`;
  }

  return `
    <svg viewBox="0 0 300 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display:block;">
      <defs>
        <linearGradient id="grad_bra" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF5F0" />
          <stop offset="100%" stop-color="#EFE7DF" />
        </linearGradient>
        <linearGradient id="grad_leggings" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF8F5" />
          <stop offset="100%" stop-color="#EFE7DF" />
        </linearGradient>
        <linearGradient id="grad_rib-leggings" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F3EFE9" />
          <stop offset="100%" stop-color="#DFD7CE" />
        </linearGradient>
        <linearGradient id="grad_tank" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF8F5" />
          <stop offset="100%" stop-color="#F2EAE1" />
        </linearGradient>
        <linearGradient id="grad_tank-m" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF5F0" />
          <stop offset="100%" stop-color="#E7E1DC" />
        </linearGradient>
        <linearGradient id="grad_muscle-tank" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EBEBEB" />
          <stop offset="100%" stop-color="#D7D7D7" />
        </linearGradient>
        <linearGradient id="grad_hoodie" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF8F5" />
          <stop offset="100%" stop-color="#EADFC9" />
        </linearGradient>
        <linearGradient id="grad_shorts-w" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF5F0" />
          <stop offset="100%" stop-color="#EADFC9" />
        </linearGradient>
        <linearGradient id="grad_shorts-m" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EAEAEA" />
          <stop offset="100%" stop-color="#D5D5D5" />
        </linearGradient>
        <linearGradient id="grad_long-sleeve" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF5F0" />
          <stop offset="100%" stop-color="#EFE7DF" />
        </linearGradient>
        <linearGradient id="grad_jumpsuit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF5F0" />
          <stop offset="100%" stop-color="#E5DCDE" />
        </linearGradient>
        <linearGradient id="grad_joggers" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EAEAEA" />
          <stop offset="100%" stop-color="#D5D5D5" />
        </linearGradient>
        <linearGradient id="grad_compression" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2E2E2" />
          <stop offset="100%" stop-color="#CCCCCC" />
        </linearGradient>
        <linearGradient id="grad_tee" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ECECEC" />
          <stop offset="100%" stop-color="#C7C7C7" />
        </linearGradient>
        <linearGradient id="grad_cap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF8F5" />
          <stop offset="100%" stop-color="#E7E1DC" />
        </linearGradient>
        <linearGradient id="grad_mat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF5F0" />
          <stop offset="100%" stop-color="#DFD0C6" />
        </linearGradient>
        <linearGradient id="grad_backpack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ECECEC" />
          <stop offset="100%" stop-color="#C7C7C7" />
        </linearGradient>
        <linearGradient id="grad_bottle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF5F0" />
          <stop offset="100%" stop-color="#DFD0C6" />
        </linearGradient>
      </defs>
      ${innerSVG}
      <text x="25" y="325" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="12" fill="#111" opacity="0.15" letter-spacing="2">COREX</text>
    </svg>
  `;
}

// ==========================================
// 8. RENDER ENGINE: HOME PAGE
// ==========================================
function renderHomeView() {
  renderBestSellers();
}

function renderBestSellers() {
  const grid = document.getElementById("bestsellers-grid");
  if (!grid) return;

  // Render for active tab (default: women)
  renderBestSellersTab(state.activeBestsellerTab || "women");

  // Tab switching
  document.querySelectorAll(".home-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".home-tab-btn").forEach(b => b.classList.remove("active-tab"));
      btn.classList.add("active-tab");
      state.activeBestsellerTab = btn.dataset.tab;
      renderBestSellersTab(btn.dataset.tab);
    });
  });
}

function renderBestSellersTab(tab) {
  const grid = document.getElementById("bestsellers-grid");
  if (!grid) return;

  grid.innerHTML = "";

  // Pull the exact same items shown in each primary menu collection.
  // There are no cloned or artificial "Best Seller" products.
  const bestSellers = getCollectionProducts(tab)
    .filter(product => product.isBestSeller === true)
    .slice(0, 4);

  if (bestSellers.length === 0) {
    grid.innerHTML = `
      <div class="empty-grid-msg">
        <h3>No Best Sellers Yet</h3>
        <p>Featured best sellers for this collection will appear here soon.</p>
      </div>
    `;
    return;
  }

  // The module intentionally contains exactly four products per collection.
  grid.style.gridTemplateColumns = "";

  bestSellers.forEach(product => {
    grid.appendChild(createProductCard(product));
  });
}
// ==========================================
// 9. PRODUCT CARD MAKER (WITH REAL IMAGE & GRACEFUL FALLBACK)
// ==========================================
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.id = product.id;

  let stars = "";
  const fullStars = Math.floor(product.rating);
  for (let i = 0; i < 5; i++) {
    stars += `<svg viewBox="0 0 24 24" style="${i < fullStars ? 'fill: #F5A623; stroke: #F5A623;' : 'fill: none; stroke: #ccc;'}"><polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" /></svg>`;
  }

  let priceHTML = `<span class="product-card-price">${formatPrice(product.price)}</span>`;
  if (product.oldPrice) {
    priceHTML = `
      <span class="product-card-price has-sale">${formatPrice(product.price)}</span>
      <span class="product-card-price-old">${formatPrice(product.oldPrice)}</span>
    `;
  }

  const isWished = state.wishlist.includes(product.id);

  const productBadge = getProductBadge(product);
  let badgeHTML = "";
  if (productBadge) {
    const bClass = productBadge.toLowerCase() === "sale" ? "sale" : "";
    badgeHTML = `<span class="product-card-badge ${bClass}">${productBadge}</span>`;
  }

  let colorsHTML = "";
  product.colors.forEach(c => {
    colorsHTML += `<span class="color-dot" style="background-color: ${c.value};" title="${c.name}"></span>`;
  });

  const defaultColor = product.colors[0] ? product.colors[0].value : "#FAF5F0";

  card.innerHTML = `
    <div class="product-img-wrapper" style="position:relative; overflow:hidden;">
      ${badgeHTML}
      <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" aria-label="Toggle Wishlist">
        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </button>
      
      <img src="${product.imageUrl}" alt="${product.name}" class="product-card-img" loading="lazy" 
        style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease;" 
        onclick="navigateTo('detail', { id: ${product.id} })"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      
      <div class="prod-placeholder" style="display: none; width: 100%; height: 100%;" onclick="navigateTo('detail', { id: ${product.id} })">
        ${getProductSVGPlaceholder(product.image, defaultColor, product.name)}
      </div>


      <button class="quick-add-btn" data-id="${product.id}">Quick Add</button>
    </div>
    <div class="product-card-info" onclick="navigateTo('detail', { id: ${product.id} })">
      <div class="product-card-rating">
        <div style="display:flex;">${stars}</div>
        <span>(${product.reviews})</span>
      </div>
      <h3 class="product-card-name">${product.name}</h3>
      <div class="product-card-price-row">
        <div>${priceHTML}</div>
        <div class="product-card-colors">${colorsHTML}</div>
      </div>
    </div>
  `;

  card.querySelector(".wishlist-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
    e.currentTarget.classList.toggle("active");
  });

  card.querySelector(".quick-add-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    quickAddToCart(product);
  });

  return card;
}

// ==========================================
// 10. QUICK ADD TO CART
// ==========================================
function quickAddToCart(product) {
  const selectedColor = product.colors[0];
  const selectedSize = product.sizes[0] || "One Size";
  addToCart(product, selectedSize, selectedColor, 1);
}

function addToCart(product, size, color, quantity = 1) {
  const existingIndex = state.cart.findIndex(item => 
    item.product.id === product.id && 
    item.size === size && 
    item.color.name === color.name
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      product,
      size,
      color,
      quantity
    });
  }

  saveToStorage();
  updateBadges();
  showToast(`Added ${quantity}x ${product.name} (${size} / ${color.name}) to cart!`);
}

function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast("Removed from wishlist.");
  } else {
    state.wishlist.push(productId);
    showToast("Added to wishlist!", "success");
  }
  saveToStorage();
  updateBadges();

  if (state.currentView === "wishlist") {
    renderWishlistView();
  }
}

// ==========================================
// 11. RENDER ENGINE: PRODUCT LISTING (SHOP)
// ==========================================
function renderShopView() {
  const grid = document.getElementById("catalog-grid");
  const title = document.getElementById("shop-view-title");
  if (!grid || !title) return;

  let formattedTitle = "Shop All Products";
  if (state.activeCategory === "women") formattedTitle = "Women's Activewear";
  else if (state.activeCategory === "men") formattedTitle = "Men's Gym Gear";
  else if (state.activeCategory === "yoga") formattedTitle = "Yoga Collection";
  else if (state.activeCategory === "accessories") formattedTitle = "Premium Accessories";
  else if (state.activeCategory === "sale") formattedTitle = "Exclusive Sale";
  else if (state.activeCategory === "new") formattedTitle = "New Arrivals";
  else if (state.activeCategory === "best-seller") formattedTitle = "Best Sellers";

  title.textContent = formattedTitle;

  let filtered = [...PRODUCTS];
  if (["women", "men", "yoga", "accessories", "new", "sale"].includes(state.activeCategory)) {
    // Keep menu tabs deterministic and use the same product records as home modules.
    filtered = getCollectionProducts(state.activeCategory);
  } else if (state.activeCategory === "best-seller") {
    filtered = PRODUCTS.filter(product => product.isBestSeller === true);
  }

  if (state.activeFilters.category.length > 0) {
    filtered = filtered.filter(p => state.activeFilters.category.includes(p.subCategory) || state.activeFilters.category.includes(p.category));
  }

  if (state.activeFilters.size.length > 0) {
    filtered = filtered.filter(p => p.sizes.some(s => state.activeFilters.size.includes(s)));
  }

  if (state.activeFilters.color.length > 0) {
    filtered = filtered.filter(p => p.colors.some(c => state.activeFilters.color.includes(c.name)));
  }

  if (state.activeFilters.priceMin !== "") {
    filtered = filtered.filter(p => p.price >= parseFloat(state.activeFilters.priceMin));
  }
  if (state.activeFilters.priceMax !== "") {
    filtered = filtered.filter(p => p.price <= parseFloat(state.activeFilters.priceMax));
  }

  if (state.activeFilters.material.length > 0) {
    filtered = filtered.filter(p => state.activeFilters.material.some(m => p.material.toLowerCase().includes(m.toLowerCase())));
  }

  if (state.activeSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.activeSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.activeSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.activeSort === "newest") {
    filtered.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
  }

  grid.innerHTML = "";
  document.getElementById("results-count").textContent = `${filtered.length} products`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-grid-msg">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        <h3>No Products Found</h3>
        <p>Try adjusting your search keywords or sidebar filters.</p>
        <button class="btn btn-primary" onclick="resetFilters(true)">Clear All Filters</button>
      </div>
    `;
  } else {
    filtered.forEach(p => {
      grid.appendChild(createProductCard(p));
    });
  }

  renderActiveFilterPills();
}

function toggleSidebarFilter(type, value, isChecked) {
  if (isChecked) {
    if (!state.activeFilters[type].includes(value)) {
      state.activeFilters[type].push(value);
    }
  } else {
    state.activeFilters[type] = state.activeFilters[type].filter(val => val !== value);
  }
  renderShopView();
}

function setPriceFilter(min, max) {
  state.activeFilters.priceMin = min;
  state.activeFilters.priceMax = max;
  renderShopView();
}

function resetFilters(triggerRender = false) {
  state.activeFilters = {
    category: [],
    size: [],
    color: [],
    priceMin: "",
    priceMax: "",
    material: []
  };

  document.querySelectorAll(".filter-checkbox").forEach(cb => cb.checked = false);
  document.querySelectorAll(".filter-size-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".filter-color-btn").forEach(btn => btn.classList.remove("active"));
  
  const minVal = document.getElementById("price-min");
  const maxVal = document.getElementById("price-max");
  if (minVal) minVal.value = "";
  if (maxVal) maxVal.value = "";

  if (triggerRender) {
    renderShopView();
  }
}

function renderActiveFilterPills() {
  const row = document.getElementById("active-filters-row");
  if (!row) return;

  row.innerHTML = "";
  let hasFilters = false;

  state.activeFilters.category.forEach(cat => {
    hasFilters = true;
    createPill(row, "category", cat, cat);
  });

  state.activeFilters.size.forEach(size => {
    hasFilters = true;
    createPill(row, "size", size, `Size: ${size}`);
  });

  state.activeFilters.color.forEach(col => {
    hasFilters = true;
    createPill(row, "color", col, `Color: ${col}`);
  });

  if (state.activeFilters.priceMin !== "" || state.activeFilters.priceMax !== "") {
    hasFilters = true;
    const min = state.activeFilters.priceMin || "0";
    const max = state.activeFilters.priceMax || "Any";
    createPill(row, "price", "range", `${formatPrice(parseFloat(min))} - ${formatPrice(parseFloat(max))}`, () => {
      state.activeFilters.priceMin = "";
      state.activeFilters.priceMax = "";
      const minVal = document.getElementById("price-min");
      const maxVal = document.getElementById("price-max");
      if (minVal) minVal.value = "";
      if (maxVal) maxVal.value = "";
      renderShopView();
    });
  }

  state.activeFilters.material.forEach(mat => {
    hasFilters = true;
    createPill(row, "material", mat, mat);
  });

  if (hasFilters) {
    const clearBtn = document.createElement("button");
    clearBtn.className = "clear-filters-btn";
    clearBtn.textContent = "Clear All";
    clearBtn.onclick = () => resetFilters(true);
    row.appendChild(clearBtn);
  }
}

function createPill(container, type, value, labelText, customRemoveFn = null) {
  const pill = document.createElement("span");
  pill.className = "filter-pill";
  pill.innerHTML = `
    ${labelText}
    <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  `;

  pill.onclick = () => {
    if (customRemoveFn) {
      customRemoveFn();
    } else {
      state.activeFilters[type] = state.activeFilters[type].filter(v => v !== value);
      
      const chk = document.querySelector(`.filter-checkbox[data-type="${type}"][value="${value}"]`);
      if (chk) chk.checked = false;

      if (type === "size") {
        const btn = document.querySelector(`.filter-size-btn[data-size="${value}"]`);
        if (btn) btn.classList.remove("active");
      }
      if (type === "color") {
        const btn = document.querySelector(`.filter-color-btn[data-color="${value}"]`);
        if (btn) btn.classList.remove("active");
      }

      renderShopView();
    }
  };

  container.appendChild(pill);
}

// ==========================================
// 12. RENDER ENGINE: PRODUCT DETAIL
// ==========================================
function renderProductDetailView() {
  const prod = state.activeProduct;
  if (!prod) return;

  const breadcrumb = document.getElementById("detail-breadcrumb");
  if (breadcrumb) {
    const collection = getProductCollection(prod);
    const collectionLabel = {
      women: "Women",
      men: "Men",
      yoga: "Yoga",
      accessories: "Accessories",
      new: "New Arrivals",
      sale: "Sale"
    }[collection] || "Shop";
    breadcrumb.innerHTML = `
      <a href="#" onclick="navigateTo('home'); return false;">Home</a>
      <span class="breadcrumb-separator">/</span>
      <a href="#" onclick="navigateTo('shop', { category: '${collection}' }); return false;">${collectionLabel}</a>
      <span class="breadcrumb-separator">/</span>
      <span style="color:var(--text-primary); font-weight:700;">${prod.name}</span>
    `;
  }

  const badgeWrap = document.getElementById("detail-badge-wrap");
  const detailBadge = getProductBadge(prod);
  if (badgeWrap) {
    if (detailBadge) {
      badgeWrap.style.display = "inline-block";
      badgeWrap.className = `detail-badge ${detailBadge.toLowerCase() === 'sale' ? 'sale' : ''}`;
      badgeWrap.textContent = detailBadge;
    } else {
      badgeWrap.style.display = "none";
    }
  }

  document.getElementById("detail-product-name").textContent = prod.name;
  
  const priceBox = document.getElementById("detail-price-box");
  if (priceBox) {
    if (prod.oldPrice) {
      priceBox.innerHTML = `
        <span class="detail-price has-sale">${formatPrice(prod.price)}</span>
        <span class="detail-price-old">${formatPrice(prod.oldPrice)}</span>
      `;
    } else {
      priceBox.innerHTML = `<span class="detail-price">${formatPrice(prod.price)}</span>`;
    }
  }

  document.getElementById("detail-rating-num").textContent = prod.rating.toFixed(1);
  document.getElementById("detail-rating-count").textContent = `(${prod.reviews} reviews)`;
  
  const starsBox = document.getElementById("detail-rating-stars");
  if (starsBox) {
    let stars = "";
    const fullStars = Math.floor(prod.rating);
    for (let i = 0; i < 5; i++) {
      stars += `<svg viewBox="0 0 24 24" style="${i < fullStars ? 'fill: #F5A623; stroke: #F5A623;' : 'fill: none; stroke: #ccc;'}"><polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" /></svg>`;
    }
    starsBox.innerHTML = stars;
  }

  document.getElementById("detail-desc-text").textContent = prod.description;
  document.getElementById("detail-spec-material").textContent = prod.material;

  let selectedColor = prod.colors[0];
  let selectedSize = prod.sizes[0] || "One Size";
  let activeQuantity = 1;

  const updateDetailImage = (imgUrl, colorVal) => {
    const mainImgWrap = document.getElementById("detail-main-img-wrap");
    if (mainImgWrap) {
      mainImgWrap.innerHTML = `
        <img class="detail-main-img" src="${imgUrl}" alt="${prod.name}" 
          style="width: 100%; height: 100%; object-fit: cover; display: block;"
          onload="this.style.display='block'; this.nextElementSibling.style.display='none';" 
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div class="prod-placeholder" style="display: none; width:100%; height:100%;">
          ${getProductSVGPlaceholder(prod.image, colorVal || "#FAF5F0", prod.name)}
        </div>

      `;
    }
  };

  const colorContainer = document.getElementById("detail-colors-wrap");
  if (colorContainer) {
    colorContainer.innerHTML = "";
    document.getElementById("detail-active-color-name").textContent = selectedColor.name;
    
    prod.colors.forEach((c, index) => {
      const btn = document.createElement("button");
      btn.className = `detail-color-btn ${index === 0 ? 'active' : ''}`;
      btn.innerHTML = `<span class="detail-color-inner" style="background-color: ${c.value};"></span>`;
      btn.onclick = (e) => {
        document.querySelectorAll(".detail-color-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedColor = c;
        document.getElementById("detail-active-color-name").textContent = c.name;
        updateDetailImage(prod.imageUrl, c.value);
      };
      colorContainer.appendChild(btn);
    });
  }

  updateDetailImage(prod.imageUrl, selectedColor.value);

  const thumbWrap = document.getElementById("detail-gallery-thumbs");
  if (thumbWrap) {
    thumbWrap.innerHTML = "";
    
    const imagesList = prod.galleryImages && prod.galleryImages.length > 0 ? prod.galleryImages : [prod.imageUrl];
    
    imagesList.forEach((imgUrl, idx) => {
      const thumb = document.createElement("div");
      thumb.className = `gallery-thumb ${idx === 0 ? 'active' : ''}`;
      thumb.style.position = "relative";
      thumb.style.overflow = "hidden";
      thumb.innerHTML = `
        <img src="${imgUrl}" alt="${prod.name}" class="gallery-thumb-img" 
          style="width:100%; height:100%; object-fit:cover; display:block;"
          onload="this.style.display='block'; this.nextElementSibling.style.display='none';" 
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="gallery-thumb-placeholder" style="display:none; width:100%; height:100%; background-color:var(--card-bg); flex-direction:column; justify-content:center; align-items:center; font-size:0.5rem; font-weight:800; color:var(--text-secondary);">
          CRX
        </div>

      `;
      thumb.onclick = () => {
        document.querySelectorAll(".gallery-thumb").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        updateDetailImage(imgUrl, selectedColor.value);
      };
      thumbWrap.appendChild(thumb);
    });
  }

  const sizeContainer = document.getElementById("detail-sizes-wrap");
  if (sizeContainer) {
    sizeContainer.innerHTML = "";
    document.getElementById("detail-active-size-name").textContent = selectedSize;

    prod.sizes.forEach((s, index) => {
      const btn = document.createElement("button");
      btn.className = `detail-size-btn ${index === 0 ? 'active' : ''}`;
      btn.textContent = s;
      btn.onclick = () => {
        document.querySelectorAll(".detail-size-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSize = s;
        document.getElementById("detail-active-size-name").textContent = s;
      };
      sizeContainer.appendChild(btn);
    });
  }

  const stepperVal = document.getElementById("detail-stepper-val");
  if (stepperVal) {
    stepperVal.textContent = activeQuantity;
    document.getElementById("detail-stepper-minus").onclick = () => {
      if (activeQuantity > 1) {
        activeQuantity--;
        stepperVal.textContent = activeQuantity;
      }
    };
    document.getElementById("detail-stepper-plus").onclick = () => {
      activeQuantity++;
      stepperVal.textContent = activeQuantity;
    };
  }

  const cartBtn = document.getElementById("detail-add-cart-btn");
  if (cartBtn) {
    cartBtn.onclick = () => {
      addToCart(prod, selectedSize, selectedColor, activeQuantity);
    };
  }

  const buyBtn = document.getElementById("detail-buy-now-btn");
  if (buyBtn) {
    buyBtn.onclick = () => {
      state.cart = [{
        product: prod,
        size: selectedSize,
        color: selectedColor,
        quantity: activeQuantity
      }];
      saveToStorage();
      navigateTo("checkout");
    };
  }

  const wishBtn = document.getElementById("detail-wishlist-btn");
  if (wishBtn) {
    const isWished = state.wishlist.includes(prod.id);
    wishBtn.innerHTML = `
      <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:${isWished ? 'var(--accent-primary)' : 'none'}; stroke:${isWished ? 'var(--accent-primary)' : 'currentColor'}; stroke-width:2;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      Add to Wishlist
    `;

    wishBtn.onclick = () => {
      toggleWishlist(prod.id);
      const isWishedNow = state.wishlist.includes(prod.id);
      wishBtn.querySelector("svg").style.fill = isWishedNow ? 'var(--accent-primary)' : 'none';
      wishBtn.querySelector("svg").style.stroke = isWishedNow ? 'var(--accent-primary)' : 'currentColor';
    };
  }

  document.querySelectorAll(".detail-tab-btn").forEach(btn => {
    btn.onclick = (e) => {
      document.querySelectorAll(".detail-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".detail-tab-content").forEach(c => c.classList.remove("active"));
      
      e.currentTarget.classList.add("active");
      const tabId = e.currentTarget.dataset.tab;
      document.getElementById(`tab-content-${tabId}`).classList.add("active");
    };
  });

  renderProductReviews(prod);
  renderRecommendedProducts(prod);
}

function renderProductReviews(product) {
  const container = document.getElementById("tab-content-reviews");
  if (!container) return;

  const demoReviews = [
    { name: "Jessica M.", rating: 5, date: "May 14, 2026", content: "Absolutely love the soft feel of the fabric! Stretches perfectly during yoga flow and holds shape afterward. Will buy more colors." },
    { name: "David K.", rating: 4.5, date: "April 28, 2026", content: "Great fit and keeps me dry during workout sessions. The materials feel premium. Fit was true to size." },
    { name: "Emily R.", rating: 5, date: "March 19, 2026", content: "Highly recommend COREX. Best quality activewear I've ever owned. Very breathable and squat proof!" }
  ];

  container.innerHTML = `<h3>Customer Reviews</h3><br><div class="detail-reviews-container"></div>`;
  const list = container.querySelector(".detail-reviews-container");

  demoReviews.forEach(r => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += `<svg viewBox="0 0 24 24" style="${i < Math.floor(r.rating) ? 'fill: #F5A623; stroke: #F5A623;' : 'fill: none; stroke: #ccc;'}"><polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" /></svg>`;
    }

    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div class="review-header">
        <span class="review-user">${r.name}</span>
        <span class="review-date">${r.date}</span>
      </div>
      <div class="review-rating">${stars}</div>
      <p class="review-content">${r.content}</p>
    `;
    list.appendChild(item);
  });
}

function renderRecommendedProducts(product) {
  const container = document.getElementById("recommended-grid");
  if (!container) return;

  container.innerHTML = "";
  const recs = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.gender === product.gender)).slice(0, 4);

  recs.forEach(p => {
    container.appendChild(createProductCard(p));
  });
}

// ==========================================
// 13. RENDER ENGINE: CART VIEW (WITH FORMAL TABLE HEADERS)
// ==========================================
function renderCartView() {
  const list = document.getElementById("cart-items-list");
  const summaryBox = document.getElementById("cart-summary-box");
  const mainWrap = document.getElementById("cart-main-layout");
  const emptyState = document.getElementById("cart-empty-state");

  if (!list || !summaryBox || !mainWrap || !emptyState) return;

  if (state.cart.length === 0) {
    mainWrap.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  mainWrap.style.display = "grid";
  emptyState.style.display = "none";

  // Create table header matching Screen 2 mockup
  list.innerHTML = `
    <div class="cart-table-header">
      <span>PRODUCT</span>
      <span>PRICE</span>
      <span>QUANTITY</span>
      <span>TOTAL</span>
      <span></span>
    </div>
  `;

  state.cart.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "cart-item-row";

    const itemTotal = item.product.price * item.quantity;
    const itemColor = item.color.value;

    row.innerHTML = `
      <div class="cart-item-info-col" style="display:flex; gap:1.5rem; align-items:center;">
        <div class="cart-item-image" onclick="navigateTo('detail', { id: ${item.product.id} })" style="position:relative; overflow:hidden; width:90px; height:90px; border-radius:var(--radius-sm); cursor:pointer;">
          <img src="${item.product.imageUrl}" alt="${item.product.name}" 
            style="width:100%; height:100%; object-fit:cover; display:block;"
            onload="this.style.display='block'; this.nextElementSibling.style.display='none';" 
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div style="width: 90px; height: 90px; display:none; background-color:var(--card-bg); flex-direction:column; justify-content:center; align-items:center; font-size:0.7rem; font-weight:800; color:var(--text-secondary);">
            CRX
          </div>

        </div>
        <div class="cart-item-details">
          <h3 class="cart-item-name" onclick="navigateTo('detail', { id: ${item.product.id} })" style="cursor:pointer; font-weight:700;">${item.product.name}</h3>
          <span class="cart-item-variant" style="color:var(--text-secondary); font-size:0.85rem;">Size: ${item.size} | Color: ${item.color.name}</span>
        </div>
      </div>
      
      <div class="cart-item-price-col" style="font-weight:600;">
        ${formatPrice(item.product.price)}
      </div>
      
      <div class="cart-item-quantity">
        <div class="stepper" style="height:36px;">
          <button class="stepper-btn minus">-</button>
          <span class="stepper-val">${item.quantity}</span>
          <button class="stepper-btn plus">+</button>
        </div>
      </div>
      
      <div class="cart-item-total" style="font-weight:700; font-size:1.05rem;">
        ${formatPrice(itemTotal)}
      </div>
      
      <button class="cart-item-remove-btn" title="Remove Item">
        <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
      </button>
    `;

    row.querySelector(".stepper-btn.minus").onclick = () => {
      if (item.quantity > 1) {
        updateCartQuantity(index, item.quantity - 1);
      }
    };
    row.querySelector(".stepper-btn.plus").onclick = () => {
      updateCartQuantity(index, item.quantity + 1);
    };

    row.querySelector(".cart-item-remove-btn").onclick = () => {
      removeFromCart(index);
    };

    list.appendChild(row);
  });

  renderCartSummary();
}

function updateCartQuantity(index, quantity) {
  state.cart[index].quantity = quantity;
  saveToStorage();
  updateBadges();
  renderCartView();
}

function removeFromCart(index) {
  const item = state.cart[index];
  state.cart.splice(index, 1);
  saveToStorage();
  updateBadges();
  renderCartView();
  showToast(`Removed ${item.product.name} from cart.`);
}

function renderCartSummary() {
  const summaryBox = document.getElementById("cart-summary-box");
  if (!summaryBox) return;

  const subtotal = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  let discount = 0;
  let hasFreeShip = false;
  
  if (state.activeCoupon === "COREX10") {
    discount = subtotal * 0.1;
  } else if (state.activeCoupon === "FREESHIP") {
    hasFreeShip = true;
  }

  // Free shipping threshold is $75 (aligned with demo.png)
  const shipThreshold = 75;
  const subtotalAfterDiscount = subtotal - discount;
  const isFreeShipEligible = hasFreeShip || subtotalAfterDiscount >= shipThreshold;
  const shipping = isFreeShipEligible ? 0 : 5;
  const total = subtotalAfterDiscount + shipping;

  // Render dynamic free shipping progress bar text
  let progressTextHTML = "";
  if (!isFreeShipEligible) {
    const diff = (shipThreshold - subtotalAfterDiscount).toFixed(2);
    progressTextHTML = `
      <div class="free-ship-progress-box" style="margin-bottom: 1.5rem; background-color: var(--card-bg); padding: 12px; border-radius: var(--radius-sm); text-align: center; border: 1px solid var(--border-color);">
        <p style="font-size: 0.82rem; font-weight: 600; color: var(--accent-primary);">You're ${formatPrice(parseFloat(diff))} away from free shipping!</p>
        <div style="background-color: var(--border-color); height: 6px; border-radius: 3px; margin-top: 8px; overflow: hidden;">
          <div style="background-color: var(--accent-primary); height: 100%; width: ${Math.min(100, (subtotalAfterDiscount / shipThreshold) * 100)}%; transition: width 0.3s ease;"></div>
        </div>
      </div>
    `;
  } else {
    progressTextHTML = `
      <div class="free-ship-progress-box" style="margin-bottom: 1.5rem; background-color: #e8f5e9; padding: 12px; border-radius: var(--radius-sm); text-align: center; border: 1px solid #c8e6c9;">
        <p style="font-size: 0.82rem; font-weight: 600; color: #2e7d32;">🎉 Congratulations! You qualify for Free Shipping!</p>
      </div>
    `;
  }

  summaryBox.innerHTML = `
    <h3 class="summary-card-title">Order Summary</h3>
    
    ${progressTextHTML}

    <div class="summary-row">
      <span>Subtotal</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    ${discount > 0 ? `
    <div class="summary-row" style="color:var(--accent-primary);">
      <span>Discount (10%)</span>
      <span>-${formatPrice(discount)}</span>
    </div>` : ""}
    <div class="summary-row">
      <span>Shipping ${subtotalAfterDiscount >= shipThreshold ? " (Free over $75)" : ""}</span>
      <span>${shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
    </div>
    <div class="coupon-section">
      <label class="detail-option-label" style="font-size:0.75rem;">Promo Code</label>
      <div class="coupon-form">
        <input type="text" id="coupon-input-field" class="coupon-input" placeholder="e.g. COREX10" value="${state.activeCoupon || ''}">
        <button class="coupon-btn" id="coupon-apply-btn">Apply</button>
      </div>
      <div id="coupon-msg" class="coupon-message"></div>
    </div>
    <div class="summary-row total-row">
      <span>Total</span>
      <span>${formatPrice(total)}</span>
    </div>
    <button class="btn btn-primary btn-full" onclick="navigateTo('checkout')">Proceed to Checkout</button>
    <button class="btn btn-link btn-full" style="margin-top:1rem; text-align:center;" onclick="navigateTo('shop')">Continue Shopping</button>
  `;

  document.getElementById("coupon-apply-btn").onclick = () => {
    const code = document.getElementById("coupon-input-field").value.trim().toUpperCase();
    applyCouponCode(code);
  };
}

function applyCouponCode(code) {
  const msg = document.getElementById("coupon-msg");
  if (!msg) return;

  if (code === "COREX10") {
    state.activeCoupon = "COREX10";
    msg.className = "coupon-message success";
    msg.textContent = "Coupon COREX10 applied: 10% discount on order!";
    renderCartView();
  } else if (code === "FREESHIP") {
    state.activeCoupon = "FREESHIP";
    msg.className = "coupon-message success";
    msg.textContent = "Coupon FREESHIP applied: Free standard shipping!";
    renderCartView();
  } else if (code === "") {
    state.activeCoupon = null;
    msg.className = "coupon-message";
    msg.textContent = "";
    renderCartView();
  } else {
    state.activeCoupon = null;
    msg.className = "coupon-message error";
    msg.textContent = "Invalid coupon code. Try COREX10 or FREESHIP.";
    renderCartView();
  }
}

// ==========================================
// 14. RENDER ENGINE: CHECKOUT VIEW
// ==========================================
let activeShippingMethod = "standard";
let activePaymentMethod = "cod";

function renderCheckoutView() {
  const container = document.getElementById("checkout-view");
  if (!container) return;

  const list = document.getElementById("checkout-summary-items");
  if (!list) return;

  list.innerHTML = "";
  state.cart.forEach(item => {
    const el = document.createElement("div");
    el.className = "checkout-item-preview";
    el.innerHTML = `
      <div class="checkout-item-img" style="position:relative; width:50px; height:50px; overflow:hidden; border-radius:var(--radius-sm);">
        <img src="${item.product.imageUrl}" alt="${item.product.name}" 
          style="width:100%; height:100%; object-fit:cover; display:block;"
          onload="this.style.display='block'; this.nextElementSibling.style.display='none';" 
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div style="width: 50px; height: 50px; display:none; background-color:var(--card-bg); flex-direction:column; justify-content:center; align-items:center; font-size:0.5rem; font-weight:800; color:var(--text-secondary);">
          CRX
        </div>

      </div>
      <div class="checkout-item-info">
        <h4 class="checkout-item-name">${item.product.name}</h4>
        <span class="checkout-item-variant">Size: ${item.size} | Color: ${item.color.name}</span>
        <div class="checkout-item-qty-price">Qty: ${item.quantity} × ${formatPrice(item.product.price)}</div>
      </div>
      <div class="checkout-item-price">${formatPrice(item.product.price * item.quantity)}</div>
    `;
    list.appendChild(el);
  });

  recalcCheckoutTotals();

  document.querySelectorAll('.method-card[data-ship]').forEach(card => {
    card.onclick = (e) => {
      document.querySelectorAll('.method-card[data-ship]').forEach(c => c.classList.remove("active"));
      document.querySelectorAll('.method-card[data-ship] input').forEach(inp => inp.checked = false);
      
      card.classList.add("active");
      card.querySelector("input").checked = true;
      activeShippingMethod = card.dataset.ship;
      recalcCheckoutTotals();
    };
  });

  document.querySelectorAll('.method-card[data-payment]').forEach(card => {
    card.onclick = (e) => {
      document.querySelectorAll('.method-card[data-payment]').forEach(c => c.classList.remove("active"));
      document.querySelectorAll('.method-card[data-payment] input').forEach(inp => inp.checked = false);
      
      card.classList.add("active");
      card.querySelector("input").checked = true;
      activePaymentMethod = card.dataset.payment;
    };
  });

  const submitBtn = document.getElementById("place-order-btn");
  if (submitBtn) {
    submitBtn.onclick = (e) => {
      e.preventDefault();
      if (validateCheckoutForm()) {
        processOrderSuccess();
      }
    };
  }
}

function recalcCheckoutTotals() {
  const subtotal = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  let discount = 0;
  let hasFreeShip = false;
  if (state.activeCoupon === "COREX10") {
    discount = subtotal * 0.1;
  } else if (state.activeCoupon === "FREESHIP") {
    hasFreeShip = true;
  }

  // Shipping details ($75 free shipping threshold, $5 express)
  let shipFee = 0;
  if (!hasFreeShip) {
    if (activeShippingMethod === "standard") {
      shipFee = subtotal - discount >= 75 ? 0 : 5;
    } else {
      shipFee = 5.00; // Express shipping matches $5.00 from mockup
    }
  }

  const grandTotal = subtotal - discount + shipFee;

  document.getElementById("checkout-subtotal").textContent = formatPrice(subtotal);
  
  const discountRow = document.getElementById("checkout-discount-row");
  if (discount > 0) {
    discountRow.style.display = "flex";
    document.getElementById("checkout-discount").textContent = `-${formatPrice(discount)}`;
  } else {
    discountRow.style.display = "none";
  }

  document.getElementById("checkout-shipping").textContent = shipFee === 0 ? "FREE" : formatPrice(shipFee);
  document.getElementById("checkout-total").textContent = formatPrice(grandTotal);
}

function validateCheckoutForm() {
  let isValid = true;
  const fields = ["checkout-name", "checkout-phone", "checkout-email", "checkout-address", "checkout-city", "checkout-district"];
  
  fields.forEach(fid => {
    const el = document.getElementById(fid);
    const grp = el.closest(".form-group");
    const val = el.value.trim();
    
    grp.classList.remove("error");
    const errMsg = grp.querySelector(".form-error-msg");
    if (errMsg) errMsg.remove();

    if (val === "") {
      isValid = false;
      grp.classList.add("error");
      const err = document.createElement("span");
      err.className = "form-error-msg";
      err.textContent = "This field is required.";
      grp.appendChild(err);
    } else if (fid === "checkout-email" && !validateEmail(val)) {
      isValid = false;
      grp.classList.add("error");
      const err = document.createElement("span");
      err.className = "form-error-msg";
      err.textContent = "Invalid email format.";
      grp.appendChild(err);
    } else if (fid === "checkout-phone" && !validatePhone(val)) {
      isValid = false;
      grp.classList.add("error");
      const err = document.createElement("span");
      err.className = "form-error-msg";
      err.textContent = "Invalid phone number (minimum 9 digits).";
      grp.appendChild(err);
    }
  });

  if (!isValid) {
    showToast("Please correct errors before ordering.", "error");
  }

  return isValid;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[0-9+()-\s]{9,15}$/.test(phone);
}

// ==========================================
// 15. PROCESS ORDER SUCCESS
// ==========================================
function processOrderSuccess() {
  const orderId = "CRX-" + Math.floor(100000 + Math.random() * 900000);
  const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  
  const subtotal = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  let discount = 0;
  let hasFreeShip = false;
  if (state.activeCoupon === "COREX10") {
    discount = subtotal * 0.1;
  } else if (state.activeCoupon === "FREESHIP") {
    hasFreeShip = true;
  }
  
  let shipFee = 0;
  if (!hasFreeShip) {
    shipFee = activeShippingMethod === "standard" ? (subtotal - discount >= 75 ? 0 : 5) : 5;
  }
  const total = subtotal - discount + shipFee;

  document.getElementById("success-order-id").textContent = orderId;
  document.getElementById("success-order-date").textContent = date;
  document.getElementById("success-order-payment").textContent = getPaymentMethodLabel(activePaymentMethod);
  document.getElementById("success-order-total").textContent = formatPrice(total);

  state.cart = [];
  state.activeCoupon = null;
  saveToStorage();
  updateBadges();

  navigateTo("success");
  showToast("Order placed successfully!", "success");
}

function getPaymentMethodLabel(method) {
  switch (method) {
    case "vnpay": return "VNPay E-Wallet";
    case "momo": return "MoMo Wallet";
    case "zalopay": return "ZaloPay";
    case "card": return "Credit / Debit Card";
    case "cod": default: return "Cash on Delivery";
  }
}

// ==========================================
// 16. RENDER ENGINE: WISHLIST VIEW
// ==========================================
function renderWishlistView() {
  const grid = document.getElementById("wishlist-grid");
  const emptyState = document.getElementById("wishlist-empty-state");
  if (!grid || !emptyState) return;

  if (state.wishlist.length === 0) {
    grid.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  grid.style.display = "grid";
  emptyState.style.display = "none";

  grid.innerHTML = "";
  
  state.wishlist.forEach(id => {
    const prod = PRODUCTS.find(p => p.id === id);
    if (prod) {
      grid.appendChild(createProductCard(prod));
    }
  });
}

// ==========================================
// 17. OVERLAYS: LIVE SEARCH ACTION
// ==========================================
function bindSearchEngine() {
  const openBtn = document.getElementById("search-open-btn");
  const closeBtn = document.getElementById("search-close-btn");
  const overlay = document.getElementById("search-overlay");
  const input = document.getElementById("search-input-field");
  const grid = document.getElementById("search-results-grid");
  const count = document.getElementById("search-results-count");

  if (!openBtn || !closeBtn || !overlay || !input || !grid) return;

  const toggleSearch = (isOpen) => {
    overlay.classList.toggle("active", isOpen);
    if (isOpen) {
      input.value = "";
      input.focus();
      grid.innerHTML = "";
      count.textContent = "Type to search...";
    }
  };

  openBtn.onclick = () => toggleSearch(true);
  closeBtn.onclick = () => toggleSearch(false);
  
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      toggleSearch(false);
    }
  });

  input.addEventListener("input", (e) => {
    const val = e.target.value.trim().toLowerCase();
    if (val.length < 2) {
      grid.innerHTML = "";
      count.textContent = "Type at least 2 characters...";
      return;
    }

    const matched = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(val) || 
      p.description.toLowerCase().includes(val) ||
      p.category.toLowerCase().includes(val) ||
      p.subCategory.toLowerCase().includes(val)
    );

    grid.innerHTML = "";
    count.textContent = `Found ${matched.length} matches for "${val}"`;

    if (matched.length === 0) {
      grid.innerHTML = `
        <div class="empty-grid-msg" style="grid-column: 1/-1;">
          <p>No matches found. Try searching for "leggings", "yoga", or "cap".</p>
        </div>
      `;
    } else {
      matched.forEach(p => {
        const card = createProductCard(p);
        card.onclick = () => toggleSearch(false);
        grid.appendChild(card);
      });
    }
  });
}

// ==========================================
// 18. AUTH SIMULATION
// ==========================================
function bindAuthModal() {
  const openBtn = document.getElementById("account-open-btn");
  const overlay = document.getElementById("auth-modal-overlay");
  const closeBtn = document.getElementById("auth-close-btn");
  const authCard = document.getElementById("auth-card-content");

  if (!openBtn || !overlay || !closeBtn || !authCard) return;

  const toggleModal = (isOpen) => {
    overlay.classList.toggle("active", isOpen);
  };

  openBtn.onclick = () => {
    renderAuthCardContent();
    toggleModal(true);
  };
  closeBtn.onclick = () => toggleModal(false);

  overlay.onclick = (e) => {
    if (e.target === overlay) toggleModal(false);
  };

  function renderAuthCardContent() {
    if (state.currentUser) {
      const firstInitial = state.currentUser.name.charAt(0).toUpperCase();
      authCard.innerHTML = `
        <div class="auth-profile-box">
          <div class="profile-avatar">${firstInitial}</div>
          <h3 class="profile-name">Hello, ${state.currentUser.name}!</h3>
          <span class="profile-email">${state.currentUser.email}</span>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Welcome back to your COREX premium member hub.</p>
          <button class="btn btn-secondary btn-full" id="logout-btn">Log Out</button>
        </div>
      `;

      document.getElementById("logout-btn").onclick = () => {
        state.currentUser = null;
        saveToStorage();
        showToast("Logged out successfully.");
        renderAuthCardContent();
      };
    } else {
      authCard.innerHTML = `
        <h3 class="auth-modal-title">Sign In</h3>
        <p class="auth-modal-subtitle">Log in to track orders and save your favorites.</p>
        <form class="auth-form" id="login-form">
          <div class="form-group">
            <label for="login-email">Email Address</label>
            <input type="email" id="login-email" required placeholder="demo@corex.com" value="demo@corex.com">
          </div>
          <div class="form-group">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" required placeholder="••••••••" value="password123">
          </div>
          <button type="submit" class="btn btn-primary btn-full" style="margin-top:0.5rem;">Log In</button>
        </form>
        <div class="auth-switch">
          Don't have an account? <button class="auth-switch-btn" id="go-register-btn">Register here</button>
        </div>
      `;

      document.getElementById("login-form").onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value.trim();
        
        state.currentUser = {
          name: "Demo Customer",
          email: email
        };
        saveToStorage();
        showToast("Welcome to COREX!", "success");
        renderAuthCardContent();
      };

      document.getElementById("go-register-btn").onclick = () => {
        renderRegisterCardContent();
      };
    }
  }

  function renderRegisterCardContent() {
    authCard.innerHTML = `
      <h3 class="auth-modal-title">Create Account</h3>
      <p class="auth-modal-subtitle">Join COREX community for free shipping and member rewards.</p>
      <form class="auth-form" id="register-form">
        <div class="form-group">
          <label for="reg-name">Full Name</label>
          <input type="text" id="reg-name" required placeholder="Jane Doe">
        </div>
        <div class="form-group">
          <label for="reg-email">Email Address</label>
          <input type="email" id="reg-email" required placeholder="jane@example.com">
        </div>
        <div class="form-group">
          <label for="reg-password">Password</label>
          <input type="password" id="reg-password" required placeholder="••••••••">
        </div>
        <button type="submit" class="btn btn-primary btn-full" style="margin-top:0.5rem;">Create Account</button>
      </form>
      <div class="auth-switch">
        Already have an account? <button class="auth-switch-btn" id="go-login-btn">Sign In</button>
      </div>
    `;

    document.getElementById("register-form").onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById("reg-name").value.trim();
      const email = document.getElementById("reg-email").value.trim();

      state.currentUser = {
        name,
        email
      };
      saveToStorage();
      showToast("Account created successfully!", "success");
      renderAuthCardContent();
    };

    document.getElementById("go-login-btn").onclick = () => {
      renderAuthCardContent();
    };
  }
}

// ==========================================
// 19. MOBILE DRAWER NAVIGATION
// ==========================================
function bindMobileMenu() {
  const openBtn = document.getElementById("hamburger-open-btn");
  const closeBtn = document.getElementById("hamburger-close-btn");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("mobile-drawer-overlay");

  if (!openBtn || !closeBtn || !drawer || !overlay) return;

  openBtn.onclick = () => {
    drawer.classList.add("active");
    overlay.classList.add("active");
  };

  const closeMenu = () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  };

  closeBtn.onclick = closeMenu;
  overlay.onclick = closeMenu;
}

// ==========================================
// 20. SIDEBAR FILTERS (SHOP VIEW) BIND
// ==========================================
function bindSidebarFilters() {
  document.querySelectorAll(".filter-checkbox").forEach(cb => {
    cb.addEventListener("change", (e) => {
      const type = e.target.dataset.type;
      const value = e.target.value;
      const isChecked = e.target.checked;
      toggleSidebarFilter(type, value, isChecked);
    });
  });

  document.querySelectorAll(".filter-size-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const sizeVal = e.target.dataset.size;
      e.target.classList.toggle("active");
      const isActive = e.target.classList.contains("active");
      toggleSidebarFilter("size", sizeVal, isActive);
    });
  });

  document.querySelectorAll(".filter-color-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const colVal = e.currentTarget.dataset.color;
      e.currentTarget.classList.toggle("active");
      const isActive = e.currentTarget.classList.contains("active");
      toggleSidebarFilter("color", colVal, isActive);
    });
  });

  const minPrice = document.getElementById("price-min");
  const maxPrice = document.getElementById("price-max");
  if (minPrice && maxPrice) {
    const handlePriceChange = () => {
      setPriceFilter(minPrice.value, maxPrice.value);
    };
    minPrice.addEventListener("input", handlePriceChange);
    maxPrice.addEventListener("input", handlePriceChange);
  }

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.activeSort = e.target.value;
      renderShopView();
    });
  }

  const filterOpen = document.getElementById("mobile-filter-open-btn");
  const filterClose = document.getElementById("mobile-filter-close-btn");
  const sidebar = document.getElementById("filter-sidebar");
  
  if (filterOpen && sidebar) {
    filterOpen.onclick = () => sidebar.classList.add("active");
  }
  if (filterClose && sidebar) {
    filterClose.onclick = () => sidebar.classList.remove("active");
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("mobile-drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  }
}

// ==========================================
// 21. STARTUP SYSTEM
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 50);
    }
  });

  bindSearchEngine();
  bindAuthModal();
  bindMobileMenu();
  bindSidebarFilters();

  renderHomeView();

  // Keep the current page after reload and make browser Back/Forward stay inside the SPA.
  if (!window.location.hash) {
    syncBrowserRoute("home", {}, true);
  }

  window.addEventListener("hashchange", restoreRouteFromLocation);
  restoreRouteFromLocation();
});

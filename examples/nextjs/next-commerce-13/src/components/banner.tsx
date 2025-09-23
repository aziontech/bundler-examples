import Image from "next/image";

export function Banner() {
  return (
    <div className="flex flex-1 flex-col gap-1">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <section className="rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 sm:py-16 shadow-2xl">
          <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
            <div className="max-w-md space-y-6 text-white">
              <div className="space-y-2">
                <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                  🚀 Discover Your
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Perfect Style
                  </span>
                </h1>
                <p className="text-lg text-purple-100 md:text-xl">
                  Unleash your potential with our curated collection of premium products. 
                  Quality meets innovation in every piece.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  🛍️ Shop Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-6 rounded-full transition-all duration-300">
                  📖 Learn More
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-purple-100">
                <span className="flex items-center">
                  <span className="mr-2">✨</span>
                  Premium Quality
                </span>
                <span className="flex items-center">
                  <span className="mr-2">🚚</span>
                  Free Shipping
                </span>
                <span className="flex items-center">
                  <span className="mr-2">💯</span>
                  Satisfaction Guaranteed
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <Image
                alt="Premium Products Collection"
                loading="eager"
                priority={true}
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                height={450}
                width={450}
                src="https://files.stripe.com/links/MDB8YWNjdF8xT3BaeG5GSmNWbVh6bURsfGZsX3Rlc3RfaDVvWXowdU9ZbWlobUIyaHpNc1hCeDM200NBzvUjqP"
                style={{
                  objectFit: "cover",
                }}
                sizes="(max-width: 640px) 70vw, 450px"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

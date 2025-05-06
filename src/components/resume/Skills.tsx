import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
            >
                <div className="w-full lgl:w-1/2">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">
                        Features
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">Langages</h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Javascript</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">typescript</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">php</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">html</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">css</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full lgl:w-1/2">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">
                        Features
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">Frameworks/autres</h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">React Native Expo</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Nestjs</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Express.js</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Laravel</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Next.js</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">React.js</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">TAILWIND</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Redux</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full lgl:w-1/2">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-designColor tracking-[4px] uppercase">
                            Features
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">Outils et autres</h2>
                    </div>
                    <div className='className="mt-14 w-full flex flex-col gap-6'>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">GitHub</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0"></span>
                                </motion.span>
                            </span>
                        </div>
{/* pour faire correspondre le % de la barre affichée à celui affiché en chiffre.
On va addapter le pourcentage du chiffre à afficher à celui du w-[20%] de className de motion.span*/}

                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Figma</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>

                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">trello</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>

                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Stripe</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0"></span>
                            </motion.span>
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Skills

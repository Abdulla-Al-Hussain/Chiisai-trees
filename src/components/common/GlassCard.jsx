function GlassCard({children,className=""}){

    return(

        <div
            className={`
                rounded-32px
                border
                border-white/20
                bg-white/10
                backdrop-blur-2xl
                shadow--[0_20px_80px_rgba(0,0,0,.35)]
                ${className}
            `}
        >

            {children}

        </div>

    )

}

export default GlassCard;
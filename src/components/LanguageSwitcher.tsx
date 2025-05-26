'use client'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
    const router = useRouter()
    const pathname = usePathname()

    const switchLang = (lang: string) => {
        const newPath = pathname.replace(/^\/(en|ar)/, `/${lang}`)
        router.push(newPath)
    }

    return (
        <div>
            <button onClick={() => switchLang('en')}>English</button>
    <button onClick={() => switchLang('ar')}>العربية</button>
    </div>
)
}

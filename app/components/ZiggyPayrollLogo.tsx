import Image from 'next/image'

export function ZiggyPayrollLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/press-assets/ziggypayroll-wordmark-dark.png"
      alt="ZiggyPayroll"
      width={140}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}

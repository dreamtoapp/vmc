'use client'

import { useEffect } from 'react'

export default function ForceDirLTR() {
  useEffect(() => {
    const htmlEl = document.documentElement
    const prevDir = htmlEl.getAttribute('dir') || ''
    const forceLTR = () => htmlEl.setAttribute('dir', 'ltr')
    forceLTR()

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'dir') {
          if (htmlEl.getAttribute('dir') !== 'ltr') forceLTR()
        }
      }
    })
    observer.observe(htmlEl, { attributes: true, attributeFilter: ['dir'] })

    return () => {
      observer.disconnect()
      if (prevDir) htmlEl.setAttribute('dir', prevDir)
      else htmlEl.removeAttribute('dir')
    }
  }, [])
  return null
}



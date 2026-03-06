'use client'

import { useTransition } from 'react'
import { useIsPresentationTool } from 'next-sanity/hooks'
import { disableDraftMode } from '@/app/actions'

export function DisableDraftMode() {
  const [pending, startTransition] = useTransition()
  const isPresentationTool = useIsPresentationTool()

  // Hide the button when inside the Presentation Tool iframe
  if (isPresentationTool) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <button
        type="button"
        onClick={() => startTransition(() => disableDraftMode())}
        className="bg-black text-white text-xs px-4 py-2 rounded-full shadow-lg hover:bg-black/80 transition-colors"
      >
        {pending ? 'Exiting preview...' : 'Exit preview mode'}
      </button>
    </div>
  )
}

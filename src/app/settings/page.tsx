import { Paper } from '@mui/material'
import Link from 'next/link'

const Settings = () => {
  return (
    <div>
      <div className="text-center text-3xl mb-6">Settings</div>
      <Paper className="p-6 sm:p-7 lg:p-10" elevation={3}>
        <div className="grid grid-cols-2 gap-3 items-center">
          <Link
            className="border-black border-4 text-center text-2xl"
            href="/settings/tag"
            passHref
          >
            Tags
          </Link>
          <div>Visualize, create and delete tags</div>
        </div>
      </Paper>
    </div>
  )
}

export default Settings

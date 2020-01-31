import React from 'react'
import PageMain from '../../common/PageMain'
import PermissionAPI from '../../common/PermissionAPI'
import PermissionNFC from '../../common/PermissionNFC'
import RequireInteraction from '../../common/RequireInteraction'
import PageTitle from '../../common/PageTitle'
import PageCenter from '../../common/PageCenter'
import NFCReadIcon from '../../common/NFCReadIcon'
import PageHooks from './PageHooks'
// ______________________________________________________
//
const Page: React.FC = () => {
  const hooks = PageHooks()
  return (
    <>
      <PageCenter>
        <video
          ref={hooks.videoRef}
          onPlay={hooks.handlePlay}
          onEnded={hooks.handleEnded}
        />
        {hooks.mode === 'ready' && <NFCReadIcon />}
      </PageCenter>
      <PageTitle text={hooks.message} />
    </>
  )
}
// ______________________________________________________
//
const Container: React.FC = () => (
  <PageMain backgroundColor="grape">
    <PermissionAPI>
      <PermissionNFC>
        <RequireInteraction>
          <Page />
        </RequireInteraction>
      </PermissionNFC>
    </PermissionAPI>
  </PageMain>
)
// ______________________________________________________
//
export default Container

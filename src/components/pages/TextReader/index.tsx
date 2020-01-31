import React from 'react'
import PageMain from '../../common/PageMain'
import PermissionAPI from '../../common/PermissionAPI'
import PermissionNFC from '../../common/PermissionNFC'
import PageCenter from '../../common/PageCenter'
import PageTitle from '../../common/PageTitle'
import NFCReadIcon from '../../common/NFCReadIcon'
import PageHooks from './PageHooks'
// ______________________________________________________
//
const Page: React.FC = () => {
  const hooks = PageHooks()
  return (
    <>
      <PageCenter>
        {hooks.text === null && <NFCReadIcon />}
        {hooks.text !== null && <PageTitle text={hooks.text} />}
      </PageCenter>
      <PageTitle text="Touch NFC Tag." />
    </>
  )
}
// ______________________________________________________
//
const Container: React.FC = () => (
  <PageMain backgroundColor="grassGreen">
    <PermissionAPI>
      <PermissionNFC>
        <Page />
      </PermissionNFC>
    </PermissionAPI>
  </PageMain>
)
// ______________________________________________________
//
export default Container

import React from 'react'
import PageMain from '../../common/PageMain'
import PermissionAPI from '../../common/PermissionAPI'
import PermissionNFC from '../../common/PermissionNFC'
import PageCenter from '../../common/PageCenter'
import PageTitle from '../../common/PageTitle'
import PageBounceIcon from '../../common/PageBounceIcon'
import IconPencil from '../../common/icons/IconPencil'
import Input from './Input'
import PageHooks from './PageHooks'
// ______________________________________________________
//
const Page: React.FC = () => {
  const hooks = PageHooks()
  return (
    <>
      <PageCenter>
        {!hooks.isEditing && (
          <PageBounceIcon onClick={hooks.handleClickIcon}>
            <IconPencil />
          </PageBounceIcon>
        )}
        {hooks.isEditing && (
          <Input
            inputValue={hooks.inputValue}
            handleInputChange={hooks.handleInputChange}
            handleInputBlur={hooks.handleInputBlur}
          />
        )}
      </PageCenter>
      <PageTitle text={hooks.message} />
    </>
  )
}
// ______________________________________________________
//
const Container: React.FC = () => (
  <PageMain backgroundColor="freshGreen">
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

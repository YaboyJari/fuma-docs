import Block from '../../components/Block';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center">
      <div className='text-center mb-8'>
        <h1 className="mb-4 text-2xl font-bold">Welcome to NephroFlow Docs</h1>
      </div>
      <div className="px-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Block
            text="Machine data metric gatherer."
            title="Link"
            icon="linked_services"
            link="docs/link"
          />
          <Block
            text="Unified patient record system."
            title="Record"
            icon="progress_activity"
            link="docs/record"
          />
          <Block
            text="Paperless mobile assistant."
            title="Orchestra"
            icon="tablet_mac"
            link="docs/orchestra"
          />
          <Block
            text="Patient card identification."
            title="ID"
            icon="badge"
            link="docs/id"
          />
          <Block
            text="Weight measurement."
            title="Kiosk"
            icon="scale"
            link="docs/kiosk"
          />
          <Block
            text="Compatible dialysis machines."
            title="Machine Integrations"
            icon="manufacturing"
            link="docs/machine-integrations"
          />
          <Block
            text="Mirth messaging movement flow."
            title="Third Party Integrations"
            icon="integration_instructions"
            link="docs/third-party-integrations"
          />
          {/* <Block text="Certified UFV and Kt/V modules." title="Medical Device Modules" icon="medical_services" link="software-as-medical-device/intro" /> */}
          <Block
            text="Everything technical."
            title="Technical user manuals"
            icon="hardware"
            link="docs/technical-user-manual"
          />
          <Block
            text="Release notes of the different applications."
            title="Release Notes"
            icon="new_releases"
            link="docs/release-notes/r22-1"
          />
          <Block
            text="NephroFlow Support."
            title="Support"
            icon="help"
            link="docs/support"
          />
          <Block
            text="Frequently asked questions."
            title="FAQ"
            icon="person_raised_hand"
            link="docs/faq"
          />
        </div>
      </div>
    </main>
  );
}

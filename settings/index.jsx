function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            App Settings
          </Text>
        }
      />
      <ColorSelect
        centered={true}
        settingsKey="theme"
        colors={[
          {color: 'tomato',     value: 'warm'},
          {color: 'deepskyblue',value: 'cool'},
          {color: 'gold',       value: 'bright'}
        ]}
      />
    </Page>
  );
}

registerSettingsPage(settingsComponent);

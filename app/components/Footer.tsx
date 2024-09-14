const Footer = () => {
  const currentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <footer>
      Copyright &copy; {currentYear()}.{' '}
      <a href="https://ahhacreative.com" target="_blank" rel="noreferrer">
        Ah Ha Creative, LLC
      </a>
      . All Rights Reserved.
      <br />
      <a href="/privacy">Privacy Policy</a> .{' '}
      <a href="/disclaimers">Disclaimers</a> .{' '}
      <a href="/terms">Terms and Conditions</a>
    </footer>
  )
}

export {Footer}

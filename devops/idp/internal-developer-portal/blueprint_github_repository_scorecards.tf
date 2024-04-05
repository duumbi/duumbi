resource "port_scorecard" "github_repository_scorecard_docs" {
  blueprint  = port_blueprint.github_repository.identifier
  identifier = "github_repository_scorecard_docs"
  title      = "Documentation"
  rules = [
    {
      identifier  = "has_readme"
      title       = "Has README"
      description = "The repository includes a README file, providing essential documentation and instructions for stakeholders, promoting better understanding, collaboration."
      level       = "Bronze"
      query = {
        combinator = "and"
        conditions = [
          jsonencode({
            property = "readme"
            operator = "isNotEmpty"
          })
        ]
      }
    },
    {
      identifier  = "has_description"
      title       = "Has description"
      description = "The repository has description."
      level       = "Silver"
      query = {
        combinator = "and"
        conditions = [
          jsonencode({
            property = "description"
            operator = "isNotEmpty"
          })
        ]
      }
    }
  ]
}
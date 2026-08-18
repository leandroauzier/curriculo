const PORTFOLIO_TOPIC = "portfolio";

export type GithubRepository = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    topics: string[];
    fork: boolean;
    archived: boolean;
    private: boolean;
};

export async function getGithubRepositories(): Promise<GithubRepository[]> {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        throw new Error("GITHUB_TOKEN não está configurado");
    }

    const response = await fetch(
        "https://api.github.com/user/repos?visibility=all&sort=updated&direction=desc&per_page=100",
        {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${token}`,
                "X-GitHub-Api-Version": "2026-03-10",
            },
            cache: "no-store",
        },
    );

    if (!response.ok) {
        const error = await response.text();

        throw new Error(
            `GitHub API respondeu com ${response.status}: ${error}`,
        );
    }

    const repositories = (await response.json()) as GithubRepository[];

    return repositories
        .filter(
            (repository) =>
                !repository.fork &&
                !repository.archived &&
                repository.topics?.includes(PORTFOLIO_TOPIC)
        )
        .slice(0, 6);
}